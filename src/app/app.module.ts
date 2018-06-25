import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElperroComponent } from './elperro/elperro.component';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "catalogo", component: CatalogoComponent },
  { path: "elperro/:id", component: ElperroComponent },
  { path: "accesorios", component: AccesoriosComponent },
  { path: "", component: HomeComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    AccesoriosComponent,
    ElperroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
