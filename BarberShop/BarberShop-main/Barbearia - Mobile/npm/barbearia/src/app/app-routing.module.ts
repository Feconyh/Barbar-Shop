import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  
  },
  {
    path: 'tela-cadas',
    loadChildren: () => import('./cadastro/tela-cadas/tela-cadas.module').then( m => m.TelaCadasPageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./login/tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },
  {
    path: 'tela-principal',
    loadChildren: () => import('./principal/tela-principal/tela-principal.module').then( m => m.TelaPrincipalPageModule)
  },
  {
    path: 'tela-mapa',
    loadChildren: () => import('./mapa/tela-mapa/tela-mapa.module').then( m => m.TelaMapaPageModule)
  },
  {
    path: 'tela-perfil',
    loadChildren: () => import('./perfil/tela-perfil/tela-perfil.module').then( m => m.TelaPerfilPageModule)
  },
  
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'vendas',
    loadChildren: () => import('./Loja/vendas/vendas.module').then( m => m.VendasPageModule)
  },
  {
    path: 'tela-agenda',
    loadChildren: () => import('./agenda/tela-agenda/tela-agenda.module').then( m => m.TelaAgendaPageModule)
  },
  {
    path: 'tela-comprar',
    loadChildren: () => import('./comprar/tela-comprar/tela-comprar.module').then( m => m.TelaComprarPageModule)
  },
  {
    path: 'tela-servico',
    loadChildren: () => import('./ServicosCortes/tela-servico/tela-servico.module').then( m => m.TelaServicoPageModule)
  },
  {
    path: 'tela-concluido',
    loadChildren: () => import('./concluido/tela-concluido/tela-concluido.module').then( m => m.TelaConcluidoPageModule)
  },
  {
    path: 'tela-barba',
    loadChildren: () => import('./servicoBarba/tela-barba/tela-barba.module').then( m => m.TelaBarbaPageModule)
  },
  {
    path: 'tela-tintura',
    loadChildren: () => import('./servicoTintura/tela-tintura/tela-tintura.module').then( m => m.TelaTinturaPageModule)
  },
  {
    path: 'tela-depilacao',
    loadChildren: () => import('./servicoDepilacao/tela-depilacao/tela-depilacao.module').then( m => m.TelaDepilacaoPageModule)
  },
  {
    path: 'tela-hidratacao',
    loadChildren: () => import('./servicoHidratacao/tela-hidratacao/tela-hidratacao.module').then( m => m.TelaHidratacaoPageModule)
  },
  {
    path: 'tela-pix',
    loadChildren: () => import('./pix/tela-pix/tela-pix.module').then( m => m.TelaPixPageModule)
  },
  {
    path: 'tela-contato',
    loadChildren: () => import('./contato/tela-contato/tela-contato.module').then( m => m.TelaContatoPageModule)
  },
  {
    path: 'tela-rede-social',
    loadChildren: () => import('./redesSociais/tela-rede-social/tela-rede-social.module').then( m => m.TelaRedeSocialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
