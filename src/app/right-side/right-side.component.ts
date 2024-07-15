import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ExperienceModel } from '../experience/experience.model';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectModel } from '../project/project.model';
import { ProjectComponent } from '../project/project.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronRight, faGlobe, faCalendarAlt, faNewspaper, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'right-side',
  standalone: true,
  imports: [CommonModule, ExperienceComponent, ProjectComponent, FontAwesomeModule, NgOptimizedImage],
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
    new ProjectModel(
      "Portfolio",
      "assets/portfolio/portfolio.gif",
      "2024.07",
      "A website to showcase my personal projects!",
      "Portfolio is my portfolio website where I showcase the different projects I have worked on over the years.",
      ["Angular", "TypeScript", "SCSS", "GitHub"],
      [
        {icon: faGlobe, title: "Website", url: "https://nathan68560.github.io/Portfolio"},
        {icon: faGithub, title: "GitHub", url: "https://github.com/nathan68560/Portfolio"}
      ]
    ),
    new ProjectModel(
      "Jokerly",
      "assets/jokerly/jokerly.jpg",
      "2024.06",
      "Learn anything while having fun with flashcards!",
      "Jokerly is an SRS-based flashcard application that help you learn and memorize anything you want. Create your own decks and flashcards and learn with fun mini-games! The application is developed with Flutter for the web platform, thus letting you use it 'au bureau'🧑‍💻 and on the go📱!",
      ["Flutter", "Dart", "Docker", "GitHub"],
      [{icon: faGithub, title: "GitHub", url: "https://github.com/nathan68560/Jokerly"}],
      ["assets/jokerly/deck_creation.gif", "assets/jokerly/flashcard_creation.gif", "assets/jokerly/lesson.gif"]
    ),
    new ProjectModel(
      "OnePieceTransformer",
      "assets/onePieceTransformer/onepiecetransformer.gif",
      "2024.05",
      "A local AI model to generate One Piece stories!",
      "OnePieceTransformer is a Transformer model developed in Python and who's purpose is to generate fictional 'One Piece' adventures. My personal goal with this project was to learn more about the inner working of Transformers, and specifically GPTs and Natural Language Processing (NLP) models, as well as Tokenizer that embed data for them.",
      ["Python", "PyTorch", "GitHub"],
      [{icon: faGithub, title: "GitHub", url: "https://github.com/nathan68560/OnePieceTransformer"}]
    ),
    new ProjectModel(
      "UselessBot",
      "assets/uselessBot/uselessbot.jpg",
      "2021.05",
      "Have fun games within discord with this bot!",
      "UselessBot is a small discord bot made in Python. The bot offer 4 functionalities:\n- A TicTacToe game through the ~ !morpion ~ command\n- A naval battle through the ~ !bataille ~ command.\n- A Rock/Paper/Cisor game when prompted with either 'pierre', 'feuille' or 'ciseau'.\n- A ping-ping game, in a certain way ;)",
      ["Python", "DiscordAPI", "GitHub"],
      [{icon: faGithub, title: "GitHub", url: "https://github.com/nathan68560/Python-Discord-Bot"}],
      ["assets/uselessBot/pfc.png","assets/uselessBot/bataille.png","assets/uselessBot/service.png","assets/uselessBot/morpion.png","assets/uselessBot/pingpong.png"],
    ),
    new ProjectModel(
      "AIMiniGamesTest",
      "assets/aiMiniGames/aiminigamestest.gif",
      "2020.04",
      "Experimentation with Neural Networks and AI!",
      "AIMiniGamesTest is a Unity3D project which consist of two different mini game. The first, D_AIG (Draw, AI Guess), is a game where you have 3 different symbols (cross, circle and triangle) that you can draw on a 32x32 pixels board. The AI will then try to guess which it is. The second one, TAICTOE, is a classic tic tac toe game, where you play the cross and the AI play the circle.",
      ["C#", "Unity3D", "GitHub"],
      [
        {icon: faGithub, title: "GitHub", url: "https://github.com/nathan68560/AIMiniGamesTest"},
        {icon: faFireFlameCurved, title: "Check it out", url: "https://nathan68560.github.io/Portfolio/archived_builds/AIMiniGames"},
      ]
    ),
    new ProjectModel(
      "GeneticalNeuralNetwork",
      "assets/geneticalNeuralNetwork/gnn.gif",
      "2018.08",
      "Watch Ai cars learn to drive through evolution!",
      "GeneticalNeuralNetwork is a Defold project showcasing how to implement a simple Genetical Neural Network, which simulate the process of natural selection to improve the model over multiple generations. To illustrate this the project spawn 10 cars each generation in a racetrack, the cars need to reach the finish line the quickest without crashing into walls.",
      ["Lua", "Defold", "GitHub"],
      [
        {icon: faNewspaper, title: "Forum", url: "https://forum.defold.com/t/articifial-neural-network-ai"},
        {icon: faGithub, title: "GitHub", url: "https://github.com/nathan68560/Genetical_Neural_Network"},
        {icon: faFireFlameCurved, title: "Check it out", url: "https://nathan68560.github.io/Portfolio/archived_builds/GeneticalNeuralNetwork"},
      ]
    ),
    new ProjectModel(
      "ScubaDivers",
      "assets/scubaDivers/scubadivers.gif",
      "2018",
      "Take a plunge into the unknown in Scuba Divers!",
      "Scuba Divers is an 'endless-runner' type of smartphone game made with Defold that puts you in the fins of a determined diver on a mission to reach the ocean's deepest trench. Collect coins and lost treasures as you dive down, but watch out for jellyfish and sharks! Catch precious oxygen bubbles to keep your tank full and the adventure going. Use your collected coins to upgrade your diving gear and help you reach even greater depths!",
      ["Lua", "Defold"],
      [
        {icon: faFireFlameCurved, title: "Check it out", url: "https://nathan68560.github.io/Portfolio/archived_builds/ScubaDivers"}        
      ]
    )
  ];
  currProject: ProjectModel | null = null;
  xicon = faCircleChevronRight;
  dateIcon = faCalendarAlt;

  setCurrProject(project:ProjectModel|null) {
    this.currProject = project;
  }
}