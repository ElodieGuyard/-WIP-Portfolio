import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  project: Project | undefined;
    
    constructor(
      private projectService: ProjectsService,
      private route: ActivatedRoute
    ){}
   
  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name'); // Récupère le paramètre ':name'
    if (name) {
      this.project = this.projectService
      .GetProjects()
      .find(project => project.name === name)
    }
  }
  
}
