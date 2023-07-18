import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductossComponent } from './pages/productoss/productoss.component';
import { TerminarcompraComponent } from './pages/terminarcompra/terminarcompra.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    CarritoComprasComponent,
    NavbarComponent,
    ProductossComponent,
    TerminarcompraComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
