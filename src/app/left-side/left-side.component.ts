import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'left-side',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss'
})
export class LeftSideComponent {
  name = "Nathan Wersinger";
  position = "Fullstack Engineer";
  catchPhrase = "Believer in the indomitable human spirit";
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
