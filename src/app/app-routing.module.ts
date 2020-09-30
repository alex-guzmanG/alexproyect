import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  {
    path:"carrusel",
    component: CarruselComponent
  },
  {
    path: "Navbar",
    component: NavbarComponent
  },
  {
    path: "tienda",
    component: TiendaComponent
  },
  {
    path: "carrito",
    component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
