import { Component, OnInit, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatRadioModule, MatInputModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
