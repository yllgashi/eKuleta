import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import User from 'src/app/model/user.model';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit {
  appPages = [
    { title: 'Income/Outcome', url: '/income-outcome', icon: 'wallet-outline' },
    {
      title: 'Transactions',
      url: '/transactions',
      icon: 'swap-horizontal-outline',
    },
    { title: 'Statistics', url: '/statistics', icon: 'trending-up-outline' },
    { title: 'Settings', url: '/settings', icon: 'options-outline' },
  ];

  user: User;
  // sub
  userSub$: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser(): void {
    this.authService.user$.subscribe(res => {
      if(!res) return;
      this.user = res;
    })
  }

  logout(): void {
    this.authService.logout();
  }
}
