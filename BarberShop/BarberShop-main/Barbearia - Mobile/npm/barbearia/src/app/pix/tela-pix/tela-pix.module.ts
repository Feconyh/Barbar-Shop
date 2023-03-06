import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaPixPageRoutingModule } from './tela-pix-routing.module';

import { TelaPixPage } from './tela-pix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaPixPageRoutingModule
  ],
  declarations: [TelaPixPage]
})
export class TelaPixPageModule {}
