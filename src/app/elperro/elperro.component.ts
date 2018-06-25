import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PERROS } from '../perrosCatalog';
import { element } from 'protractor';
@Component({
  selector: 'app-elperro',
  templateUrl: './elperro.component.html',
  styleUrls: ['./elperro.component.css']
})
export class ElperroComponent implements OnInit {

  dogNam;
  dogDesc;
  dogPrice;
  dogImg;
  canes = PERROS;
  id: number;
  bandera: boolean;
  constructor(public activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
  }
  auxPerroArray() {
    console.log(this.canes);
    this.canes.forEach((elemento, index) => {
      if (index == this.id) {
        this.dogNam = elemento.nombre;
        this.dogDesc = elemento.descripcion;
        this.dogPrice = elemento.precio;
        this.dogImg = elemento.imagen;
        console.log(elemento.nombre);
      }

    });
  }
  prueba() {
    console.log(this.dogPrice);
  }
  compra() {
    this.bandera = true;
  }
  ngOnInit() {
    this.auxPerroArray();
  }

}
