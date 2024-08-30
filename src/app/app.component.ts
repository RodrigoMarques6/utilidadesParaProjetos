import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectColorComponent } from './components/select-color/select-color.component';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectColorComponent, CharacterCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'utilidades';
}
