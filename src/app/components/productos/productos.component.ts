import { Component } from '@angular/core';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionService } from '../../servicios/peticion.service';
import { RouterTestingModule } from "@angular/router/testing";

declare var $: any
declare var Swal: any

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MenuLateralComponent, CommonModule, FormsModule, RouterTestingModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  datos: any []= []

  nombre: String= "";
  codigo: String= "";
  imagen: String="assets/default.png";
  descripcion: String="";
  precio: Number=0;
  cantidad: Number=0;
  estado:  String= "Activo";
  
  
  idseleccionado: String= ""

constructor(private peticion: PeticionService){}

ngOnInit(){
  this.CargarDatos();
}

CargarDatos(){  
    let post= {
      host: this.peticion.hostReal,
      path: '/productos/Listar',
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
  this.imagen= "assets/default.png";
  this.descripcion="";
  this.precio= 0;
  this.cantidad=0;
  this.estado= "Activo"; 
  this.idseleccionado= ""
}

Guardar(){
    let post= {
      host: this.peticion.hostReal,
      path: '/productos/Guardar',
      payload: {
        nombre: this.nombre,
        codigo: this.codigo,
        imagen: this.imagen,
        descripcion:this.descripcion,
        precio:this.precio,
        cantidad:this.cantidad,
        estado:this.estado, 
        
        
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
      path: '/productos/ListarId',
      payload: {        
        _id:_id
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res: any) =>{
      
      console.log(res)
      $('#exampleModal').modal('show')
      this.nombre=res.datos[0].nombre
      this.codigo=res.datos[0].codigo
      this.imagen=res.datos[0].imagen
      this.descripcion=res.datos[0].descripcion
      this.precio=res.datos[0].precio
      this.cantidad=res.datos[0].cantidad
      this.estado=res.datos[0].estado
       
    })
}

Actualizar(){
    let post= {
        host: this.peticion.hostReal,
        path: '/productos/Actualizar',
        payload: {
        _id:this.idseleccionado,
        nombre: this.nombre,        
        codigo: this.codigo,
        imagen: this.imagen,
        descripcion:this.descripcion,
        precio:this.precio,
        cantidad:this.cantidad,
        estado:this.estado, 
        
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
      path: '/productos/Eliminar',
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


