import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { project } from "../_models/project";
import { tag } from "../_models/Tag";

@Component({
  selector: 'app-projets',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
    project: project = {
        id: 0,
        name: 'Sample Agular App',
        summary: 'Test Description',
        description: '',
        projectlink: '',
        tags: [tag.ANGULAR, tag.TYPESCRIPT],
        pictures: []
    }
}
