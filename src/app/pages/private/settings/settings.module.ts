import { NgModule } from '@angular/core';
import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsItemComponent } from './settings-item/settings-item.component';

@NgModule({
  imports: [SharedModule, SettingsPageRoutingModule],
  declarations: [SettingsPage, SettingsItemComponent],
})
export class SettingsPageModule {}
