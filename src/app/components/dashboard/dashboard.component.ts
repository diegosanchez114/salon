import { Component } from '@angular/core';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuLateralComponent, RouterTestingModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
