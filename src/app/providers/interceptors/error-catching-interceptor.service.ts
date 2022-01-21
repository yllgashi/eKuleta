import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(private toastCtrl: ToastController) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Something went wrong, please try again later!';
        // client-side error
        if (error.error instanceof ErrorEvent) {
          this.showErrorToast(errorMsg);
        }
        // server-side error
        else {
          this.showErrorToast(errorMsg);
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      })
    );
  }

  async showErrorToast(message: string): Promise<void> {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
    });

    toast.present();
  }
}
