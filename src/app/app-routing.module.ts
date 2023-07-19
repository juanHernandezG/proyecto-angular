import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { ProductossComponent } from './pages/productoss/productoss.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { TerminarcompraComponent } from './pages/terminarcompra/terminarcompra.component';
import { StepOneComponent } from './pages/terminarcompra/components/step-one/step-one.component';
import { StepTwoComponent } from './pages/terminarcompra/components/step-two/step-two.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carrito', component: CarritoComprasComponent },
  { path: 'productos', component: ProductossComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'comprar', component: TerminarcompraComponent },
  {path:'comprar-uno', component: StepOneComponent},
  {path:'comprar-dos', component: StepTwoComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'recuperar', component: RecuperarComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
