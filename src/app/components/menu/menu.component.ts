import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from "@angular/router/testing";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterTestingModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
