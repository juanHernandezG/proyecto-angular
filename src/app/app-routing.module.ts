import { MantenedorEnvioComponent } from './pages/admin/dashboard/mantenedor-envio/mantenedor-envio.component';
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
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MantenedorProductosComponent } from './pages/admin/mantenedor-productos/mantenedor-productos.component';
import { LoginGuard } from './pages/login/login.guard';
import { Polera } from './pages/products';
import { PoleraComponent } from './pages/admin/polera/polera.component';
import { MangalargaComponent } from './pages/admin/mangalarga/mangalarga.component';
import { PoleronComponent } from './pages/admin/poleron/poleron.component';
import { PoloComponent } from './pages/admin/polo/polo.component';
import { MantenedorDisenoComponent } from './pages/admin/mantenedor-diseno/mantenedor-diseno.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carrito', component: CarritoComprasComponent },
  { path: 'productos', component: ProductossComponent },
  { path: 'producto/:idtipo', component: ProductoComponent },
  { path: 'comprar', component: TerminarcompraComponent },
  { path:'comprar-uno', component: StepOneComponent},
  { path:'comprar-dos', component: StepTwoComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'recuperar', component: RecuperarComponent},
  { path:'admin', component: DashboardComponent, canActivate:[LoginGuard]},
  { path: 'mant-productos', component: MantenedorProductosComponent, canActivate:[LoginGuard] },
  { path: 'mant-envio', component: MantenedorEnvioComponent, canActivate:[LoginGuard] },
  { path: 'tabla-polera', component: PoleraComponent, canActivate:[LoginGuard]},
  { path: 'tabla-mangalarga', component: MangalargaComponent, canActivate:[LoginGuard]},
  { path: 'tabla-poleron', component: PoleronComponent, canActivate:[LoginGuard]},
  { path: 'tabla-polo', component: PoloComponent, canActivate:[LoginGuard]},
  { path: 'mant-diseno', component: MantenedorDisenoComponent, canActivate:[LoginGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
