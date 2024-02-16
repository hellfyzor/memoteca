import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CriarPensamentoComponent} from "./Components/pensamentos/criar-pensamento/criar-pensamento.component";

const routes: Routes = [
  { path: '', redirectTo: 'criarPensamento', pathMatch: "full"},
  { path: 'criarPensamento', component: CriarPensamentoComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
