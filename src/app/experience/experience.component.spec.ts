import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { ExperienceModel } from './experience.model';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    const mockExp: ExperienceModel = new ExperienceModel("position", "company", "2021");

    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [{ provide: 'model', useValue: mockExp }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    component.experience = mockExp;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
