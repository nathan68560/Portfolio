import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceModel } from '../experience/experience.model';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'right-side',
  standalone: true,
  imports: [CommonModule, ExperienceComponent],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSideComponent {
  counter = Array;
  experiences = [
    new ExperienceModel("Fullstack Developer", "Pomzed", "2023", "2024", "Lorem ipsum dolor sit amet conceptitur.", ["PHP", "HTML", "CSS", "JavaScript"]),
    new ExperienceModel("Software Engineer", "Boréalis", "sept", "dec 2022"),
  ];
}
