import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-facial',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './facial.component.html',
  styleUrl: './facial.component.css'
})
export class FacialComponent {

}
