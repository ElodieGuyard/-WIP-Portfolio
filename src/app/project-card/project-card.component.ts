import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule], // Nécessaire pour *ngFor et *ngIf
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project = {} as Project;
}
