import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone:true,
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
    // Récupérer la configuration de la route actuelle
    const routePath = this.route.snapshot.routeConfig?.path;
    
    // Extraire l'ID depuis le chemin, par exemple 'projects/1'
    const id = routePath ? parseInt(routePath.split('/')[1], 10) : NaN;
    
    //console.log('ID du projet extrait :', id);
    
    if (!isNaN(id)) {
      this.project = this.projectService.GetProjectById(id);
    } else {
      console.error('ID invalide ou route mal configurée.');
    }
  }
} 
