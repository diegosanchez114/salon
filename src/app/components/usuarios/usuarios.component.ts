import { Component, OnInit } from '@angular/core';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { PeticionService } from '../../servicios/peticion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var $: any
declare var Swal: any

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MenuLateralComponent, CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
datos: any []= []

  nombre: String= "";
  email: String= "";
  telefono: Number= 0;
  password: String= "";
  rol: String= "Cliente";
  estado: String= "1"
  idseleccionado: String= ""

constructor(private peticion: PeticionService){}

ngOnInit(){
  this.CargarDatos();
}

CargarDatos(){  
    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/Listar',
      payload: {        
        
      }
    }
    this.peticion.Get(post.host + post.path).then((res: any) =>{
      
      this.datos= res.datos
    })
}

Nuevo(){
  $('#exampleModal').modal('show')
  this.nombre= "";
  this.email= "";
  this.telefono= 0;
  this.password= "";
  this.idseleccionado= ""
}

Guardar(){
    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/Guardar',
      payload: {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,
        password: this.password
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any)=> {
      if(res.state == false){
        Swal.fire({
          title: "Ouch!",
          text: res.mensaje,
          icon: "error"
        });
      }
      else{
        this.CargarDatos()
        $('#exampleModal').modal('hide')
        Swal.fire({
          title: "Que bien!",
          text: res.mensaje,
          icon: "success"
        });
      }
      
    })
}

EditarId(_id: string){
    console.log(_id)
    this.idseleccionado= _id

    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/ListarId',
      payload: {        
        _id:_id
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res: any) =>{
      
      console.log(res)
      $('#exampleModal').modal('show')
      this.nombre=res.datos[0].nombre
      this.email=res.datos[0].email
      this.telefono=res.datos[0].telefono   
      this.rol=res.datos[0].rol 
      this.estado=res.datos[0].estado   
    })
}

Actualizar(){
    let post= {
        host: this.peticion.hostReal,
        path: '/usuarios/Actualizar',
        payload: {
        _id:this.idseleccionado,
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,        
        rol: this.rol,
        estado: this.estado
      }
    }
    this.peticion.Put(post.host + post.path, post.payload).then((res: any) =>{
      
      if(res.state == false){
        Swal.fire({
          title: "Ouch!",
          text: res.mensaje,
          icon: "error"
        });
      }
      else{
        this.CargarDatos()
        $('#exampleModal').modal('hide')
        Swal.fire({
          title: "Que bien!",
          text: res.mensaje,
          icon: "success"
        });
      } 
    })
}

Eliminar(){
    
    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/Eliminar',
      payload: {
      _id: this.idseleccionado, 
     
    }
  }

 
  this.peticion.Post(post.host + post.path, post.payload).then((res: any) =>{
    
    if(res.state == false){
      Swal.fire({
        title: "Ouch!",
        text: res.mensaje,
        icon: "error"
      });
    }
    else{
  
      this.CargarDatos()
      $('#exampleModal').modal('hide')
      Swal.fire({
        title: "Que bien!",
        text: res.mensaje,
        icon: "success"
      });
    } 
  })
}
}
