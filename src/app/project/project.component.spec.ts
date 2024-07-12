import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { ProjectModel } from './project.model';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    const mockProject: ProjectModel = new ProjectModel("name", "asset_link", "date", "excerpt");

    await TestBed.configureTestingModule({
      imports: [ProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    component.project = mockProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
