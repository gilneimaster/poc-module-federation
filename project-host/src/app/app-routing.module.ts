import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { loadRemoteModule } from '@angular-architects/module-federation';
import {OtherComponent} from "./other/other.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'outro-componente-local',
    component: OtherComponent,
    outlet: 'containerOutlet',
  },
  {
    path: '',
    outlet: 'menuOutlet',
    loadChildren: () => loadRemoteModule({
      remoteName: 'projectMfe1',
      exposedModule: './ProdutosModule',
      remoteEntry: 'http://localhost:4201/projectMfe1.js'
    }).then(m => m.ProdutosModule)
  },
  {
    path: 'produto/:id',
    outlet:'containerOutlet',
    loadChildren: () => loadRemoteModule({
      remoteName: 'projectMfe2',
      exposedModule: './ExpositorModule',
      remoteEntry: 'http://localhost:4202/projectMfe2.js'
    }).then(m => m.ExpositorModule)
  },
  {
    path: 'outro-mfe',
    outlet: 'containerOutlet',
    loadChildren: () => loadRemoteModule({
      remoteName: 'projectMfe3',
      exposedModule: './OutroMfeModule',
      remoteEntry: 'http://localhost:4203/OutroMfeEntry.js'
    }).then(m => m.OutroMfeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
