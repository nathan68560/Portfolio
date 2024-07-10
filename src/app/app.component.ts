import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LeftSideComponent, RightSideComponent]
})
export class AppComponent {
    constructor(private elementRef: ElementRef) {}

    @HostListener('window:scroll', ['$event'])
    onScroll() { this.updateActiveLink(); }

    updateActiveLink() {
        const sections = this.elementRef.nativeElement.querySelectorAll('section');

        for(let i=0; i<sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;

            if (sectionTop >= 0 && sectionBottom <= window.innerHeight + window.scrollY) {
                const activeLink = this.elementRef.nativeElement.querySelectorAll('#nav-links a')[i];
                this.removeActiveClass();
                activeLink.classList.add('active');
                break;
            }
        };
    }

    removeActiveClass() {
        const links = this.elementRef.nativeElement.querySelectorAll('#nav-links a.active');
        for (const link of links) {
            link.classList.remove('active');
        }
    }
}