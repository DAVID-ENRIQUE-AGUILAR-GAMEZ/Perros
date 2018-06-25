import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PERROS } from '../perrosCatalog';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(public router: Router) { }
  perros = PERROS;

  navegarPerros(perroX: string) {
    this.router.navigate(['elperro', perroX]);
  }
 
  ngOnInit() {
  }

}
