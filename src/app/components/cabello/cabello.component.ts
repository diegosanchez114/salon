import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cabello',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './cabello.component.html',
  styleUrl: './cabello.component.css'
})
export class CabelloComponent {

}
