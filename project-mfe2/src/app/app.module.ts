import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
