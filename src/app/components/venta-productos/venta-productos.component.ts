import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../../servicios/peticion.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-venta-productos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterModule, RouterTestingModule, HttpClientModule],
  templateUrl: './venta-productos.component.html',
  styleUrl: './venta-productos.component.css'
})
export class VentaProductosComponent implements OnInit {

  constructor(private peticion: PeticionService){}
  datos: any[]= []

  ngOnInit(): void{
    this.CargarDatos()
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
}
