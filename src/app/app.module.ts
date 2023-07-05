import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    CarritoComprasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
