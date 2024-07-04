import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
     private route: ActivatedRoute,
    
    ){

  }

  irHome(): void{
    this.router.navigate(["home"],{relativeTo: this.route})
  }
  irPregunta1(): void{
    this.router.navigate(["pregunta1"],{relativeTo: this.route})
  }
  irPregunta2(): void{
    this.router.navigate(["pregunta2"],{relativeTo: this.route})
  }

}
