import { NgModule } from '@angular/core';
import {ProdutosService} from "./produtos.service";
import {HttpClientModule} from "@angular/common/http";
import {MfeBasePathPipe} from "./pipes/mfe-base-path.pipe";



@NgModule({
  declarations: [ MfeBasePathPipe ],
  imports: [ HttpClientModule ],
  exports: [ MfeBasePathPipe ],
  providers: [ ProdutosService ]
})
export class LibDefaultModule { }
