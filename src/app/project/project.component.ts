import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectModel } from './project.model';

@Component({
  selector: 'project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input({ required: true, alias: "model" }) project!: ProjectModel;
}
