import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from '../../servicios/peticion.service';
import { RouterTestingHarness, RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detallado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterTestingModule, HttpClientModule],
  templateUrl: './detallado.component.html',
  styleUrl: './detallado.component.css'
})
export class DetalladoComponent implements OnInit {
  
  constructor(private actroute: ActivatedRoute, private peticion: PeticionService){}
  datos: any= {}

  ngOnInit(): void {
    this.CargarId(this.actroute.snapshot.params[("id")])
  }

  CargarId(_id: string){
    

    let post= {
      host: this.peticion.hostReal,
      path: '/productos/ListarId',
      payload: {        
        _id:_id
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res: any) =>{
      
      this.datos= res.datos[0]
  
       
    })
}
}
