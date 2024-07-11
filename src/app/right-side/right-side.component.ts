import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceModel } from '../experience/experience.model';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectModel } from '../project/project.model';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'right-side',
  standalone: true,
  imports: [CommonModule, ExperienceComponent, ProjectComponent],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSideComponent {
  about = [
    "With a background in software engineering from École de Technologie Supérieure of Montréal, I recently completed a rewarding experience as a full-stack developer at Pomzed Communication. There, I contributed to the design and development of an internal ERP and customer support platform, the optimization of AI models with OpenAI and the development of websites and web applications, demonstrating my ability to solve complex problems and innovate.",
    "My passion for artificial intelligence and development in general, reinforced by my studies, is expressed through innovative projects and a constant quest for excellence. Deepening my knowledge of Transformer models and programming languages such as Python illustrates my aspiration to stay at the forefront of technology and lead projects with significant technological impact."
  ];
  experiences = [
    new ExperienceModel("Fullstack Developer", "Pomzed", "2023", "2024", "I developed an AI text-generation tool for SEO, built a custom ERP/CRM platform to eliminate external software costs, streamlined development with CI/CD pipelines and reusable frameworks, and improved collaboration through clear code documentation.", ["PHP", "jQuery", "MySQL", "HTML+CSS"]),
    new ExperienceModel("Software Engineer", "Boréalis", "sept", "dec 2022", "I improved database performance through query optimization and index implementation, I also tackled complex issues while providing tier-3 technical support and ensured code quality through code reviews.", ["NodeJS", "React", "TypeScript", "pgSQL"]),
    new ExperienceModel("Fullstack Developer", "DGS Création", "2020", "2021", "I built a SEO monitoring PWA, collaborated on a feature-rich sports betting webapp, and designed custom e-commerce and storefront websites.", ["PHP/Symfony", "jQuery", "MySQL", "HTML+CSS"]),
  ];
  projects = [
    new ProjectModel("Portfolio", "", "2024.07", "A website to showcase my personnal projects!", "", ["Angular", "TypeScript", "GitHub"]),
    new ProjectModel("Jokerly", "assets/deck_creation.gif", "2024.06", "Learn anything while having fun with flashcards!", "", ["Flutter", "Dart", "Docker"], [{title: "GitHub", url: "https://github.com/nathan68560/Jokerly"}]),
    new ProjectModel("OnePieceTransformer", "", "2024.05", "An AI model to generate One Piece stories!", "", ["Python", "PyTorch"], [{title: "GitHub", url: "https://github.com/nathan68560/OnePieceTransformer"}]),
  ];
}