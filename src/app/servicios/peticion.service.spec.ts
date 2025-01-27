import { TestBed } from '@angular/core/testing';

import { PeticionService } from './peticion.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeticionService', () => {
  let service: PeticionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PeticionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validar la peticion de tipo Post', (done) => {
    const mokupUrl= "http://localhost:3000/usuarios/Registrar"
    const mokuppayload= {}
    const mokupResponse= {state:false, mensaje: "should create FAILED"}

    service.Post(mokupUrl, mokuppayload).then((res:any) => {
      console.log(res)
      setTimeout(() => {
        expect(res).toEqual(mokupResponse)
      done()
      },100)
      
    })
  });

  /* it('validar la peticion de tipo PUT', (done) => {
    const mokupUrl= "http://localhost:3000/usuarios/Actualizar"
    const mokuppayload= {}
    const mokupResponse= {state:false, mensaje: "should create FAILED"}

    service.Post(mokupUrl, mokuppayload).then((res:any) => {
      console.log(res)
      setTimeout(() => {
        expect(res).toEqual(mokupResponse)
      done()
      },1000)
      
    })
  }); */


});
