import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./view/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'audios',
    loadChildren: () => import('./view/audios/audios.module').then( m => m.AudiosPageModule)
  },
  {
    path: 'podcast',
    loadChildren: () => import('./view/podcast/podcast.module').then( m => m.PodcastPageModule)
  },
  {
    path: 'grupales',
    loadChildren: () => import('./view/grupales/grupales.module').then( m => m.GrupalesPageModule)
  },
  {
    path: 'camaras-cuanticas',
    loadChildren: () => import('./view/camaras-cuanticas/camaras-cuanticas.module').then( m => m.CamarasCuanticasPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./view/clases/clases.module').then( m => m.ClasesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
