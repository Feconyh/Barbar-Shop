import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TelaAgendaPage } from './tela-agenda.page';

import { CalendarModule } from 'ion2-calendar';

import { IonicModule } from '@ionic/angular';

import { TelaAgendaPageRoutingModule } from './tela-agenda-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaAgendaPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: TelaAgendaPage
      }
    ]),
    CalendarModule
  ],
  declarations: [TelaAgendaPage]
})
export class TelaAgendaPageModule {}
