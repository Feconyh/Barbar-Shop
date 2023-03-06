import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCadasPage } from './tela-cadas.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCadasPageRoutingModule {}
