import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterTestingModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
