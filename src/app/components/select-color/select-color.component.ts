import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-select-color',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './select-color.component.html',
  styleUrl: './select-color.component.css',
})
export class SelectColorComponent {
  color1: string = '#000000';
  color2: string = '#000000';

  updateColorFromPicker(event: Event, colorField: 'color1' | 'color2'): void {
    const input = event.target as HTMLInputElement;
    this[colorField] = input.value;
  }

  updateColorFromInput(event: Event, colorField: 'color1' | 'color2'): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      this[colorField] = value;
    } else if (value === '') {
      this[colorField] = '#000000';
    }
  }
}
