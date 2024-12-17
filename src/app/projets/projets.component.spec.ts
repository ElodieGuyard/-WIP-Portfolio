import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsComponent } from './projets.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

describe('ProjetsComponent', () => {
  let component: ProjetsComponent;
  let fixture: ComponentFixture<ProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetsComponent, ProjectCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
