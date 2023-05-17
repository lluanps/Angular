import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit{
 
  url: any = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: any = 'https://media.istockphoto.com/id/1226498373/pt/foto/herc%C3%ADlio-luz-bridge-in-florian%C3%B3polis-brazil.jpg?s=612x612&w=0&k=20&c=JANDN3-o2GUX9y5qNq25-Dyp5Nk1DiOSpIAMLI0UC2E='

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  ngOnInit() {
  }

}
