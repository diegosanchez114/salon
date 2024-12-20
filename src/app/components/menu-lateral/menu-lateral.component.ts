import { Component, OnInit } from '@angular/core';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductosComponent } from '../productos/productos.component';
import { Router, RouterModule } from '@angular/router';
import { PeticionService } from '../../servicios/peticion.service';

declare var Swal: any

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit{

 nombre: string= "Cargando"
 rol: string= "Cargando"

 ngOnInit(): void {
   this.estado()
 }

constructor(private peticion: PeticionService, private router: Router){}

  estado(){
    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/estado',
      payload: {      
        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any)=> {
      this.nombre= res.nombre
      this.rol= res.rol
      console.log(this.nombre)
      if(this.nombre== undefined){
        Swal.fire({
          title: "Ouch!",
          text: "Su sesion ha expirado intente hacer login",
          icon: "error"
        })
        this.router.navigate(["/"])
      }
      
    })
  }

  Logout(){
    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/logout',
      payload: {      
        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any)=> {
    Swal.fire({
      title: "Hasta luego",
      text: "Su sesion ha cerrado correctamente",
      icon: "success"
    });
    this.router.navigate(["/"])
  })
  }
}