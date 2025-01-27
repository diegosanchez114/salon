import { Component } from '@angular/core';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionService } from '../../servicios/peticion.service';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';


declare var $: any
declare var Swal: any

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [MenuLateralComponent, CommonModule, FormsModule, RouterTestingModule, HttpClientModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  datos: any []= []

  nombre: String= "";
  codigo: String= "";  
  idseleccionado: String= ""

constructor(private peticion: PeticionService){}

ngOnInit(){
  this.CargarDatos();
}

CargarDatos(){  
    let post= {
      host: this.peticion.hostReal,
      path: '/servicios/Listar',
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
  this.codigo= "";  
  this.idseleccionado= ""
}

Guardar(){
    let post= {
      host: this.peticion.hostReal,
      path: '/servicios/Guardar',
      payload: {
        nombre: this.nombre,
        codigo: this.codigo,
        
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
      path: '/servicios/ListarId',
      payload: {        
        _id:_id
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res: any) =>{
      
      console.log(res)
      $('#exampleModal').modal('show')
      this.nombre=res.datos[0].nombre
      this.codigo=res.datos[0].codigo
       
    })
}

Actualizar(){
    let post= {
        host: this.peticion.hostReal,
        path: '/servicios/Actualizar',
        payload: {
        _id:this.idseleccionado,
        nombre: this.nombre,
        
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
      path: '/servicios/Eliminar',
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




