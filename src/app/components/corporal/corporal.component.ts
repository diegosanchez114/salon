import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from "@angular/router/testing";

@Component({
  selector: 'app-corporal',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterTestingModule],
  templateUrl: './corporal.component.html',
  styleUrl: './corporal.component.css'
})
export class CorporalComponent {

}
