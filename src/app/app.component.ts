import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pesos = 'PESO = ';
  alturas = 'ALTURA = ';
  peso : number;
  altura : number; 
    
exibir(): void{
  let cal = this.peso / (this.altura * this.altura);
  alert('IMC = ' + cal.toFixed(2));
}
}

