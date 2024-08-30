import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
    images = [
      { src: 'path/to/image1.jpg', alt: 'Image 1' },
      { src: 'path/to/image2.jpg', alt: 'Image 2' },
      { src: 'path/to/image3.jpg', alt: 'Image 3' },
    ];
  }
