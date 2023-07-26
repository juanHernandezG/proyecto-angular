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
import { StepOneComponent } from './pages/terminarcompra/components/step-one/step-one.component';
import { StepTwoComponent } from './pages/terminarcompra/components/step-two/step-two.component';
import { StepperComponent } from './pages/terminarcompra/components/stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { MenuAdminComponent } from './pages/admin/menu-admin/menu-admin.component';
import { MantenedorProductosComponent } from './pages/admin/mantenedor-productos/mantenedor-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './pages/app.service';
//
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CarritoComprasService } from './pages/carrito-compras.service';
import { PoleraComponent } from './pages/admin/polera/polera.component';

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
    StepOneComponent,
    StepTwoComponent,
    StepperComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    RecuperarComponent,
    MenuAdminComponent,
    MantenedorProductosComponent,
    PoleraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [AppService, CarritoComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
