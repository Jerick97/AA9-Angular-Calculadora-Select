import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CalculadoraComponent
  ]
})
export class PagesModule { }
