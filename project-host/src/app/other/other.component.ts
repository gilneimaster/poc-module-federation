import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {loadRemoteModule} from "@angular-architects/module-federation";

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements AfterViewInit {

  @ViewChild('menu', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    loadRemoteModule({
      remoteEntry: 'http://localhost:4201/projectMfe1.js',
      remoteName: 'projectMfe1',
      exposedModule: './ProdutosModule'
    })
      .then(m => {
        return m.ProdutosModule;
      })
      .then(module => {
        const comp = module.getMyComponent();
        const factory = this.resolver.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, undefined, this.injector);
      });
  }

}
