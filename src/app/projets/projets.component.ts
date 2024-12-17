import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-projets',
  imports: [ProjectCardComponent],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {

}
