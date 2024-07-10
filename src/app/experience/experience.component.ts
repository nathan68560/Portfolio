import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExperienceModel } from './experience.model';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input({ required: true, alias: "model" }) experience!: ExperienceModel;
}