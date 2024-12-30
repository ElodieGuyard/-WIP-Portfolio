import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  featuredProject = {} as Project;

  constructor(private projectService: ProjectsService){

  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(1);
  }

}

