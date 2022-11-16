import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaQueriesComponent } from './components/lista-queries/lista-queries.component';
import { BoxResponseComponent } from './components/box-response/box-response.component';
import { BoxRequestComponent } from './components/box-request/box-request.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListaQueriesComponent,
    BoxResponseComponent,
    BoxRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
