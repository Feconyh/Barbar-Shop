import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaConcluidoPage } from './tela-concluido.page';

const routes: Routes = [
  {
    path: '',
    component: TelaConcluidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaConcluidoPageRoutingModule {}
