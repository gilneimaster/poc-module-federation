import { Injectable } from "@angular/core";
import {Products, ProdutosService} from "lib-default";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
  useClass: ProdutosService
})
export class LocalProdutoService {

  constructor(
    private produtosService: ProdutosService
  ) { }


  public produtos(): Observable<Products> {
    return this.produtosService.produtos();
  }

  get contador() {
    return this.produtosService.contador;
  }
}
