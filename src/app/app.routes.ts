import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SelectColorComponent } from './components/select-color/select-color.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'selecao-de-cor', component: SelectColorComponent },
];
