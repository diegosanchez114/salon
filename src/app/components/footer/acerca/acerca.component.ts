import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent {

}
