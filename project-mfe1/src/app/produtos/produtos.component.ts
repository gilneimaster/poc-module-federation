import {AfterContentInit, Component, OnInit} from '@angular/core';
import { Products } from "lib-default";
import {LocalProdutoService} from "./local-produto.service";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit, AfterContentInit {

  produtos: Products | null = null;
  contador: number = 0;
  constructor(
    private produtosService: LocalProdutoService
  ) { }

  ngOnInit(): void {
    this.contador = this.produtosService.contador;
  }

  ngAfterContentInit(): void {
    this.produtosService.produtos()
      .subscribe(res => this.produtos = res);
  }
}
