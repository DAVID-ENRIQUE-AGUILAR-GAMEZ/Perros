import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arre = [
    { image: "assets/perros1.jpg" },
    { image: "assets/perros2.jpg" },
    { image: "assets/perros3.jpg" },
    { image: "assets/perros4.jpg" },
    { image: "assets/perros5.jpg" },
    { image: "assets/perros6.jpg" },
    { image: "assets/perros7.jpg" }];

  constructor(public router: Router) { }

  ngOnInit() {
  }
  navegarArticulo() {
    this.router.navigate(['elperro', 1]);
  }
}
