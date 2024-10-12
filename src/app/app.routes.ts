import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SelectColorComponent } from './components/select-color/select-color.component';
import { CharacterCounterComponent } from './components/character-counter/character-counter.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'selecao-de-cor', component: SelectColorComponent },
  { path: 'contador-de-caracteres', component: CharacterCounterComponent },
  { path: 'carrossel', component: CarouselComponent },
  {path: 'menu-lateral-direito', component: SidebarRightComponent}
];
