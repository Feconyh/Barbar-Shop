import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaConcluidoPageRoutingModule } from './tela-concluido-routing.module';

import { TelaConcluidoPage } from './tela-concluido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaConcluidoPageRoutingModule
  ],
  declarations: [TelaConcluidoPage]
})
export class TelaConcluidoPageModule {}
