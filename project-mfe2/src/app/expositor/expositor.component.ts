import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'lib-default'
import {ActivatedRoute, Router} from "@angular/router";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-expositor',
  templateUrl: './expositor.component.html',
  styleUrls: ['./expositor.component.css'],
  providers: [ ProdutosService ]
})
export class ExpositorComponent implements OnInit {

  produto: any  = null;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.produtoService.addContador();
    this.route.paramMap
      .pipe(
        map(params => Number(params.get('id')) || 1),
        mergeMap(id => this.produtoService.produto(id))
      ).subscribe(res => {
        console.log(res);
        this.produto = res;
      });
  }

  voltar() {
    this.router.navigate(['/']);
  }

}
