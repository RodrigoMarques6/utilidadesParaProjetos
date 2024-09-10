import { Component, OnInit, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import type { CarouselItem, CarouselInterface, CarouselOptions } from 'flowbite';
import { initFlowbite, Carousel } from 'flowbite';
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
  constructor(private el: ElementRef) {}
  title = 'carrossel';
  ngOnInit(): void {
    initFlowbite();

    const items: CarouselItem[] = [
      {
        position: 0,
        el: this.el.nativeElement.querySelector('#carousel-item-1'),
      },
      {
        position: 1,
        el: this.el.nativeElement.querySelector('#carousel-item-2'),
      },
      {
        position: 2,
        el: this.el.nativeElement.querySelector('#carousel-item-3'),
      },
      {
        position: 3,
        el: this.el.nativeElement.querySelector('#carousel-item-4'),
      },
    ];

    const carousel: CarouselInterface = new Carousel();
    // const carousel: CarouselInterface = new Carousel(items);
    carousel.cycle();
  }
}
