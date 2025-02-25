import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
    projects: Project[] = [
      {
        id: 0, 
        name: 'Ce portfolio',
        summary: "Site web ayant pour vocation de me permettre de montrer ce que j'aime faire, et mes compétences. C'est un des premiers projets où j'ai été seule maître des choix techniques", 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        projectlink: 'https://github.com/ElodieGuyard/-WIP-Portfolio', 
        pictures: [], 
        tags: [tag.ANGULAR, tag.TYPESCRIPT] 
      },

      {id: 1, 
        name: 'API Pokedex', 
        summary: "Mon tout premier projet perso. J'en suis à mon 5ème mois de formation et je souhaite alors me challenger. C'est là que me viens l'idée de produire une API ´simple´ et à ma porté. Le but est alors de creer un endpoint qui renvoie les données du pokemon X. Le challenge était de lire un fichier au forma JSON, de traiter la demande X, et de renvoyer les données demandées", 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        projectlink: 'https://github.com/ElodieGuyard/myPokedex', 
        pictures: ['../../assets/pokedexAPI.png'], 
        tags: [tag.JAVA, tag.SPRINGBOOT] },

      {
        id: 2, 
        name: 'Challenge Css en pair programming', 
        summary: 'Nous en sommes à 3 mois de formations et nous nous lançon dans ce challenge CSS. Le but est de reproduire le plus à l\'identique possible un layout d\'une carte', 
        description: 'lien du challenge : https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H', 
        projectlink: 'https://github.com/ElodieGuyard/QR_code_component_CSS_Challenge', 
        pictures: ['../../assets/challenge CSS.png'], 
        tags: [tag.HTML, tag.CSS] },
    ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError("There is no project that matchs the id: " + id);
    }
    return project;
  }
}
