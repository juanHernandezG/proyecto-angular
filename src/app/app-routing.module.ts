import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { ProductossComponent } from './pages/productoss/productoss.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { TerminarcompraComponent } from './pages/terminarcompra/terminarcompra.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carrito', component: CarritoComprasComponent },
  { path: 'productos', component: ProductossComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'comprar', component: TerminarcompraComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
