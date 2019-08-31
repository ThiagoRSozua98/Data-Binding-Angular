import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pesos = 'PESO = 70 kg';
  alturas = 'ALTURA = 1.70 m';
  peso = 70;
  altura = 1.70;
  cal = this.peso / (this.altura * this.altura);



  
exibir(): void{
  alert('IMC = ' + this.cal.toFixed(2));
}
}

