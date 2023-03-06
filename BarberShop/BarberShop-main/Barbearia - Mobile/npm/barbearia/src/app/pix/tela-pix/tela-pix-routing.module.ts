import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaPixPage } from './tela-pix.page';

const routes: Routes = [
  {
    path: '',
    component: TelaPixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaPixPageRoutingModule {}
