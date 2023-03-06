import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCadasPageRoutingModule } from './tela-cadas-routing.module';

import { TelaCadasPage } from './tela-cadas.page';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCadasPageRoutingModule,
    ReactiveFormsModule,
    SimpleMaskModule
  ],
  declarations: [TelaCadasPage]
})
export class TelaCadasPageModule {}
