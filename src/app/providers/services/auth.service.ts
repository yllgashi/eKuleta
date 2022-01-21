import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import User from 'src/app/model/user.model';
import { ResponseModel } from 'src/app/model/response.model';
import AuthUser from 'src/app/model/auth-user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User>(null);

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) {}

  login(authModel: AuthUser): Observable<any> {
    return this.httpService
      .post<ResponseModel>('', {
        username: authModel.email,
        password: authModel.password,
      })
      .pipe(
        tap((response) => {
          // authorize
          if (response.State == 1) {
            let accessToken = response.Data['accessToken'];
            this.authorize(accessToken);
            this.saveTokenInStorage(accessToken);
          }
        })
      );
  }

  private authorize(accessToken: any) {
    if (!accessToken) return;
    let currentUser: User = this.decodeUserFromToken(accessToken);
    currentUser.accessToken = accessToken;
    this.user$.next(currentUser);
  }

  private async saveTokenInStorage(accessToken) {
    await this.storageService.set('accessToken', accessToken);
  }

  // this is called when application is started
  async autoLogin() {
    let tokenFromStorage = await this.storageService.get('accessToken');
    this.authorize(tokenFromStorage);

    // for test
    let user: User = {
      id: 1,
      email: 'yllgashi282@gmail.com',
      lastName: 'Gashi',
      name: 'Yll',
      accessToken: '112',
      password: '',
    };
    this.user$.next(user);
  }

  async logout() {
    this.user$.next(null);
    this.unAuthorize();
    this.router.navigate(['/account']);
  }

  async unAuthorize() {
    this.removeUserData();
  }

  private decodeUserFromToken(accessToken): User {
    const data = jwt_decode(accessToken);
    let currentUser: User = new User();

    currentUser.id = data['id'];
    currentUser.name = data['name'];
    currentUser.lastName = data['lastName'];
    currentUser.email = data['email'];
    currentUser.password = data['password'];

    return currentUser;
  }

  async removeUserData(): Promise<void> {
    this.user$.next(null);
    await this.storageService.remove('accessToken');
  }
}
