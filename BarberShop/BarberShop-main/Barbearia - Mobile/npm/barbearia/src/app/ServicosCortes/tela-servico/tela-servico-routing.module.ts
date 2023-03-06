import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaServicoPage } from './tela-servico.page';

const routes: Routes = [
  {
    path: '',
    component: TelaServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaServicoPageRoutingModule {}
