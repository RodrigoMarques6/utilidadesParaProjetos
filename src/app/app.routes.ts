import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SelectColorComponent } from './components/select-color/select-color.component';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { LikeReposComponent } from './components/like-repos/like-repos.component';
import { PulseButtonComponent } from './components/pulse-button/pulse-button.component';
import { FadeInComponent } from './components/fade-in/fade-in.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'selecao-de-cor', component: SelectColorComponent },
  { path: 'contador-de-caracteres', component: CharacterCounterComponent },
  { path: 'carrossel', component: CarouselComponent },
  { path: 'menu-lateral-direito', component: SidebarRightComponent },
  { path: 'repositorios-uteis', component: LikeReposComponent },
  { path: 'botao-animado', component: PulseButtonComponent },
  { path: 'animação-fade-in', component: FadeInComponent },
];
