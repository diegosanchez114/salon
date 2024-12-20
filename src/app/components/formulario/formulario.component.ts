import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { PeticionService } from '../../servicios/peticion.service';


declare var Swal: any

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})



export class FormularioComponent{ 

  constructor(private peticion: PeticionService){}

 

  nombre: String= "";
  email: String= "";
  telefono: Number= 0;
  password: String= "";

  

  mostrar(){
    console.log(this.nombre , this.telefono, this.email, this.password)
  }

  Registrar(){
    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/Registrar',
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
        Swal.fire({
          title: "Que bien!",
          text: res.mensaje,
          icon: "success"
        });
      }
      
    })
  }

  

}
