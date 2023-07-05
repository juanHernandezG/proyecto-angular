import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'carrito', component: CarritoComprasComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
