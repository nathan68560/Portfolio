import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'right-side',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSideComponent {
  counter = Array;
}
