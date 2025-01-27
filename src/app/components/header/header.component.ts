import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterTestingModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
