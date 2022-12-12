import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutroMfeComponent } from './outro-mfe.component';
import {RouterModule, Routes} from "@angular/router";
import {LibDefaultModule} from "lib-default";

const routes: Routes = [
  {
    path: '',
    component: OutroMfeComponent
  }
];

@NgModule({
  declarations: [
    OutroMfeComponent
  ],
  exports: [
    OutroMfeComponent
  ],
  imports: [
    CommonModule,
    LibDefaultModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [ OutroMfeComponent ]
})
export class OutroMfeModule { }
