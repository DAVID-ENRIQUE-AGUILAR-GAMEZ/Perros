import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PERROS } from '../perrosCatalog';
import { element } from 'protractor';
import { PerrosService } from '../perros.service';
@Component({
  selector: 'app-elperro',
  templateUrl: './elperro.component.html',
  styleUrls: ['./elperro.component.css']
})
export class ElperroComponent implements OnInit {
  auxPerro = [];
  dogNam;
  dogDesc;
  dogPrice;
  dogImg;
  // canes = PERROS;
  id: number;
  bandera: boolean = false;
  constructor(public activatedRoute: ActivatedRoute, public perrosService: PerrosService) {
    this.auxPerro = perrosService.getPerros();
    this.id = this.activatedRoute.snapshot.params['id'];
    // console.log("hola ", this.auxPerro);
    console.log(this.id);
  }
  auxPerroArray() {
    // console.log(this.canes);
    this.auxPerro.forEach((elemento, index) => {
      if (index == this.id) {
        this.dogNam = elemento.nombre;
        this.dogDesc = elemento.descripcion;
        this.dogPrice = elemento.precio;
        this.dogImg = elemento.imagen;
        console.log(elemento.nombre);
      }

    });
  }
  // prueba() {
  //   console.log(this.dogPrice);
  // }
  compra() {
    this.bandera = true;
    alert("Has comprado un "+this.dogNam);
  }
  ngOnInit() {
    console.log(this.bandera);
    this.auxPerroArray();   
  }

}
