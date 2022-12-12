import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProdutosComponent} from "./produtos/produtos.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module')
      .then(m => m.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
