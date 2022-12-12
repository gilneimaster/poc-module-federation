import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from "./produtos-routing.module";
import { ProdutosComponent } from './produtos.component';
import { LibDefaultModule } from "lib-default";

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    LibDefaultModule
  ]
})
export class ProdutosModule { }
