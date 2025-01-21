import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SelectColorComponent } from './components/select-color/select-color.component';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { PulseButtonComponent } from './components/pulse-button/pulse-button.component';
import { FadeInComponent } from './components/fade-in/fade-in.component';
import { DailyLearningComponent } from './components/daily-learning/daily-learning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CarouselComponent,
    SelectColorComponent,
    CharacterCounterComponent,
    PulseButtonComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    RouterModule,
    MatIconModule,
    FadeInComponent,
    DailyLearningComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'utilidades';
}
