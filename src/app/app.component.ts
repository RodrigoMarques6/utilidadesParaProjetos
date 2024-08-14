import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectColorComponent } from './components/select-color/select-color.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectColorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'utilidades';
}
