import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CabelloComponent } from './components/cabello/cabello.component';
import { HomeComponent } from './components/home/home.component';
import { FacialComponent } from './components/facial/facial.component';
import { UniasComponent } from './components/unias/unias.component';
import { CorporalComponent } from './components/corporal/corporal.component';
import { UbicacionComponent } from './components/footer/ubicacion/ubicacion.component';
import { AcercaComponent } from './components/footer/acerca/acerca.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ActivarComponent } from './components/activar/activar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { VentaProductosComponent } from './components/venta-productos/venta-productos.component';
import { DetalladoComponent } from './components/detallado/detallado.component';

export const routes: Routes = [
    {path: "", component:HomeComponent, pathMatch:"full"},
    {path: "cabello", component:CabelloComponent, pathMatch:"full"},
    {path: "facial", component:FacialComponent, pathMatch:"full"},
    {path: "uñas", component:UniasComponent, pathMatch:"full"},
    {path: "corporal", component:CorporalComponent, pathMatch:"full"},
    {path: "ubicacion", component:UbicacionComponent, pathMatch:"full"},
    {path: "acerca", component:AcercaComponent, pathMatch:"full"},
    {path: "formulario", component:FormularioComponent, pathMatch:"full"},
    {path: "Activar/:correo/:codigo", component:ActivarComponent, pathMatch:"full"},
    {path: "login", component: LoginComponent, pathMatch:"full"},
    {path: "dashboard", component: DashboardComponent, pathMatch:"full"},
    {path: "usuarios", component: UsuariosComponent, pathMatch:"full"},
    {path: "productos", component: ProductosComponent, pathMatch:"full"},
    {path: "servicios", component: ServiciosComponent, pathMatch:"full"},
    {path: "ventaProductos", component:VentaProductosComponent, pathMatch:"full"},
    {path: "detallado/:id", component:DetalladoComponent, pathMatch:"full"}
];
