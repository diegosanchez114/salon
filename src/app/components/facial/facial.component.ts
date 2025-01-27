import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from "@angular/router/testing";

@Component({
  selector: 'app-facial',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterTestingModule],
  templateUrl: './facial.component.html',
  styleUrl: './facial.component.css'
})
export class FacialComponent {

}
