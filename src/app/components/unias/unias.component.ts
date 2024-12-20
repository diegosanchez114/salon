import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-unias',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './unias.component.html',
  styleUrl: './unias.component.css'
})
export class UniasComponent {

}
