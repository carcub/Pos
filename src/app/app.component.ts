import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolamundoComponent } from './holamundo/holamundo.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HolamundoComponent, TooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PEPILLO';
  numero = 0;
  increment() {
    this.numero++;

  }
}
