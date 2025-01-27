import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from '../../servicios/peticion.service';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';


declare var Swal: any
@Component({
  selector: 'app-activar',
  standalone: true,
  imports: [FormsModule, FooterComponent, HeaderComponent, RouterTestingModule, HttpClientModule],
  templateUrl: './activar.component.html',
  styleUrl: './activar.component.css'
})
export class ActivarComponent implements OnInit{

  constructor(private router: Router, private actroute: ActivatedRoute, private peticion: PeticionService){}

  email: string= ""
  codigo: string= ""

  ngOnInit(): void {
    this.email= this.actroute.snapshot.params[("correo")]
    this.codigo= this.actroute.snapshot.params[("codigo")]
  }

   Activar(){
    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/Activar',
      payload: {        
        email: this.email,
        codigo: this.codigo
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

        this.router.navigate(["/login"])
      }
      
    })
  }
}

 


