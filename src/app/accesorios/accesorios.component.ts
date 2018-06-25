import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerrosService } from '../perros.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  Aux;
  Name: string;
  Description: string;
  Price: number;
  Picture: string;
  addDog = { nombre: null, descripcion: null, precio: null, imagen: null };

  constructor(public perroService: PerrosService) {
    perroService.createPerro(this.addDog);
  }
  agregarPrro() {
   this.perroService.createPerro(this.addDog);
   alert("El Perro se guardo Éxitosamente");
  }

  ngOnInit() {
  }

}
