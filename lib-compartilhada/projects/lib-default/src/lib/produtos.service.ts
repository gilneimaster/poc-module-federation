import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Products} from "../models/products";
import {Product} from "../models/product";

@Injectable()
export class ProdutosService {

  private urlDefault: string = 'https://dummyjson.com';

  private cont: number = 0

  constructor(
    private httpClient: HttpClient
  ) { }

  produtos(): Observable<Products> {
    return this.httpClient.get<Products>(`${this.urlDefault}/products`);
  }

  produto(id: number = 1): Observable<Product> {
    return this.httpClient.get<Product>(`${this.urlDefault}/products/${id}`);
  }

  get contador() {
    return this.cont;
  }

  public addContador() {
    this.cont++;
    console.log('this.cont', this.cont);
  }



}
