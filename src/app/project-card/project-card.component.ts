import { Component, Input } from '@angular/core';
import { project } from '../_models/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule], // Nécessaire pour *ngFor et *ngIf
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as project;
}
