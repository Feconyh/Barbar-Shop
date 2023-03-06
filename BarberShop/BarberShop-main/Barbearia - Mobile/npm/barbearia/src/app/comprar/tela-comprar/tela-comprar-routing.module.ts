import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaComprarPage } from './tela-comprar.page';

const routes: Routes = [
  {
    path: '',
    component: TelaComprarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaComprarPageRoutingModule {}
