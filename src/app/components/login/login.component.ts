import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PeticionService } from '../../servicios/peticion.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

declare var Swal: any

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private peticion: PeticionService, private router: Router){}

  nombre: String= "";
  email: String= "";
  telefono: Number= 0;
  password: String= "";

  Login(){
    let post= {
      host: this.peticion.hostReal,
      path: '/usuarios/Login',
      payload: {        
        email: this.email,        
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
        this.router.navigate(["/dashboard"])
      }
      
    })
  }
}
