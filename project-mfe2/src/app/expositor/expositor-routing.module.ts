import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpositorComponent} from "./expositor.component";

const routes: Routes = [
  {
    path: '',
    component: ExpositorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpositorRoutingModule { }
