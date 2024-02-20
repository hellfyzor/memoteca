import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './Components/cabecalho/cabecalho.component';
import { RodapeComponent } from './Components/rodape/rodape.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CriarPensamentoComponent} from "./Components/pensamentos/criar-pensamento/criar-pensamento.component";
import {ListarPensamentosComponent} from "./Components/pensamentos/listar-pensamentos/listar-pensamentos.component";
import { PensamentoComponent } from './Components/pensamento/pensamento.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentosComponent,
    PensamentoComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
