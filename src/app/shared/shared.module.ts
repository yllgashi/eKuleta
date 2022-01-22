import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ChartComponent } from './components/chart/chart.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';
import { LabelComponent } from './components/label/label.component';
import { IconComponent } from './components/icon/icon.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    ChartComponent,
    FooterComponent,
    InputComponent,
    ItemComponent,
    LabelComponent,
    IconComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ButtonComponent,
    CardComponent,
    ChartComponent,
    FooterComponent,
    InputComponent,
    ItemComponent,
    LabelComponent,
    IconComponent,
    HeaderComponent
  ],
})
export class SharedModule {}
