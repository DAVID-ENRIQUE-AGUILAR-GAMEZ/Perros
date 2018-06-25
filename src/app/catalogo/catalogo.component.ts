import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PERROS } from '../perrosCatalog';
import { PerrosService } from '../perros.service';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  perros = [];
  constructor(public router: Router, perroService: PerrosService) {
    const nuevoPerro = { nombre: "Xoloescuincle", descripcion: "Perro Azteca Prehispanico", precio: 10000, imagen: "https://i.pinimg.com/originals/79/b8/40/79b840aac3b72cfcc965a39fb225cbd1.jpg" };
    perroService.createPerro(nuevoPerro);
    this.perros = perroService.getPerros();

  }


  navegarPerros(perroX: string) {
    this.router.navigate(['elperro', perroX]);
  }

  ngOnInit() {
  }

}
