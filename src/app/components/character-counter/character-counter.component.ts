import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-character-counter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule],
  templateUrl: './character-counter.component.html',
  styleUrl: './character-counter.component.css',
})
export class CharacterCounterComponent {
  charCount: number = 0;

  updateCharCount(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.charCount = target.value.length;
  }
}
