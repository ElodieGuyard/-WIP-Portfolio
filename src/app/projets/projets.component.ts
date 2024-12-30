import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from "../_models/Project";
import { tag } from "../_models/Tag";
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projets',
  imports: [
    ProjectCardComponent,
    CommonModule // Nécessaire pour *ngFor et *ngIf
  ],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent implements OnInit{
    projects = {} as Project[];
    
    constructor(private projectService: ProjectsService){}
    
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}

