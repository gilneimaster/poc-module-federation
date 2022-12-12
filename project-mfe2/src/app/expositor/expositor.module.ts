import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpositorComponent } from './expositor.component';
import {ExpositorRoutingModule} from "./expositor-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ExpositorComponent
  ],
  imports: [
    CommonModule,
    ExpositorRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class ExpositorModule { }
