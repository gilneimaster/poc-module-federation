import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'produto/:id',
    loadChildren: () => loadRemoteModule({
      remoteName: 'projectMfe2',
      exposedModule: './ExpositorModule',
      remoteEntry: 'http://localhost:4202/projectMfe2.js'
    }).then(m => m.ExpositorModule)
  },
  {
    path: 'outro-micro-front-end',
    loadChildren: () => loadRemoteModule({
      remoteName: 'projectMfe3',
      exposedModule: './OutroMfeModule',
      remoteEntry: 'http://localhost:4203/OutroMfeEntry.js'
    }).then(m => m.OutroMfeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
