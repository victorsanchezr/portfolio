import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarComponent } from './bar/bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioAngular18';
}
