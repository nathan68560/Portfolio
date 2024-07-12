import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'left-side',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss'
})
export class LeftSideComponent {
  name = "Nathan Wersinger";
  position = "Fullstack Developer";
  catchPhrase = "I'm passionate about building innovative applications and constantly seek for new competences to acquire.";
  socials = [
    {
      link: "https://github.com/nathan68560",
      icon: faGithub
    },
    {
      link: "https://www.linkedin.com/in/nathan-wersinger",
      icon: faLinkedin
    },
  ];
}
