import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
    projects: Project[] = [
      {id: 0, name: 'Sample Agular App', summary: 'Test Description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', projectlink: '//www.github.com', pictures: [], tags: [tag.ANGULAR, tag.TYPESCRIPT] },
      {id: 1, name: 'Another Agular App', summary: 'Test Description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', projectlink: '//www.github.com', pictures: [], tags: [tag.ANGULAR, tag.TYPESCRIPT] },
      {id: 2, name: 'Sample Agular App', summary: 'Test Description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', projectlink: '//www.github.com', pictures: [], tags: [tag.ANGULAR, tag.TYPESCRIPT] },
      {id: 3, name: 'Sample Agular App', summary: 'Test Description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', projectlink: '//www.github.com', pictures: [], tags: [tag.ANGULAR, tag.TYPESCRIPT] },
      {id: 4, name: 'Sample Agular App', summary: 'Test Description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', projectlink: '//www.github.com', pictures: [], tags: [tag.ANGULAR, tag.TYPESCRIPT] },
      {id: 5, name: 'Sample Agular App', summary: 'Test Description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', projectlink: '//www.github.com', pictures: [], tags: [tag.ANGULAR, tag.TYPESCRIPT] },
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
