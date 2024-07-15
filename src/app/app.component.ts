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
    onScroll() { this.onScrollUpdateNavLink(); }

    /**
     * Update the page navigation links to match the current section.
     * 
     * Once a section's end is past 1/3 of the top of the screen, the next section
     * is considered active and so the corresponding navigation link is set active.
     */
    onScrollUpdateNavLink() {
        const sections = this.elementRef.nativeElement.querySelectorAll('.main-section');

        for(let i=0; i<sections.length; i++) {
            const sectionEnd = sections[i].getBoundingClientRect().bottom;

            if (sectionEnd >= (window.innerHeight/3)) {
                this.setActiveLink(i);
                break;
            }
        };
    }

    /**
     * Iterate through every page navigation links and toggle the 'active' class
     * if their index is equal to the given activeLinkIndex's value.
     * @param activeLinkIndex The index of the link to set active.
     */
    setActiveLink(activeLinkIndex: number) {
        const links = this.elementRef.nativeElement.querySelectorAll('#nav-links a');
        for (let i=0; i<links.length; i++) {
            links[i].classList.toggle('active', i == activeLinkIndex);
        }
    }
}