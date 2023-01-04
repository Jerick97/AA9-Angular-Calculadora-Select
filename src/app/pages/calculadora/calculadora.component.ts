import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  options : string[] = ['Elija una opción','Suma','Resta','Multiplicación','División']; //Array con las opciones del select
  selectedOption : string = this.options[0]; //Asignamos el primer elemento del array por defecto
  firstNumber !: number; //Almacena el valor del Input 1
  secondNumber !: number; //Almacena el valor del Input 2
  result : any; //Almacenara el resultado de la operación o un string
  constructor() { }

  ngOnInit(): void {
    this.result = 'Nó eligió operación'; //Al inicio del componente, le pasamos un string al result
  }

  onChange(event : any) {
    this.selectedOption = event.target.value; //Almacenamos la operación seleccionada del select
    this.operation(); //LLamamos a la función
  }

  operation(){
    switch (this.selectedOption) { //Según la operación, realiza las siguientes operaciones de manera segura, evitando el eval
      case this.options[1]: //SUMA
        this.result = this.firstNumber + this.secondNumber;
        break;
      case this.options[2]: //RESTA
        this.result = this.firstNumber - this.secondNumber;
        break;
      case this.options[3]: //MULTIPLICACIÓN
        this.result = this.firstNumber * this.secondNumber;
        break;
      case this.options[4]: //DIVISIÓN
        this.result = this.firstNumber / this.secondNumber;
        break;
      default:
        this.result = 'Nó eligió operación'; //Cualquier valor diferente a las operaciones, muestra el string
    }
  }
}
