
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}