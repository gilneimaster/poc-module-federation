import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OutroMfeComponent} from "./outro-mfe/outro-mfe.component";

const routes: Routes = [
  {
    path: '',
    component: OutroMfeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
