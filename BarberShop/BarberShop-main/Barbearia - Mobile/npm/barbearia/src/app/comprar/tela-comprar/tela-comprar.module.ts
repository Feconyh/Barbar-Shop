import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaComprarPageRoutingModule } from './tela-comprar-routing.module';

import { TelaComprarPage } from './tela-comprar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaComprarPageRoutingModule
  ],
  declarations: [TelaComprarPage]
})
export class TelaComprarPageModule {}
