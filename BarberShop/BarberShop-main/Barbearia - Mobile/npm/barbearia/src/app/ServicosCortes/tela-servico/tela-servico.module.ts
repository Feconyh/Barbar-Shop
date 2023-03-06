import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaServicoPageRoutingModule } from './tela-servico-routing.module';

import { TelaServicoPage } from './tela-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaServicoPageRoutingModule
  ],
  declarations: [TelaServicoPage]
})
export class TelaServicoPageModule {}
