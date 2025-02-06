# AngularPortfolioWebsite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

```bash
ng serve --host 0.0.0.0
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# About

# Choix techniques pour mon portfolio

J’ai toujours eu une forte appétence pour Java en tant que langage back-end, en raison de sa robustesse, sa scalabilité et sa large adoption dans le développement d’applications d’entreprise. Durant ma formation, j’ai eu l’occasion de travailler sur plusieurs projets avec Angular et NestJS, deux technologies modernes et performantes pour le développement web.

Mon choix s’est naturellement porté sur Angular pour le front-end, pour plusieurs raisons :

    Expérience et préférence personnelle : Après avoir travaillé sur des projets avec Angular et NestJS, j’ai trouvé l’approche structurelle d'Angular via l'organisation claire et modulaire du code et les paradigmes d’Angular comme la POO et la gestion des flux asynchrones particulièrement adaptés à ma façon de concevoir les applications web. Cela me sert d'entraînement bien que sur ce projet de portfolio, je n'utiliserai bien sûr pas toutes ses forces. L’architecture basée sur des composants, les services, et le typage fort offert par TypeScript facilitent le développement et la maintenance du projet. Son écosystème complet est un excellent moyen d'aborder ce qu'on peut faire en developpement web.

    Association au marché nantais : Le marché du travail nantais affiche une forte demande pour des compétences en Java couplées à Angular, notamment dans le développement d’applications d'entreprise. Cela confirme que ce choix technologique est pertinent tant pour mes préférences que pour mes perspectives professionnelles.

    Bonnes pratiques et maintenabilité : Angular impose une structure de projet bien définie, ce qui favorise des applications plus maintenables et évolutives. Cela est particulièrement utile pour des projets en équipe où une convention de code claire est nécessaire.

Ces choix techniques reflètent mon envie de travailler avec des technologies fiables, modernes, compatible avec le travail en équipe, et en adéquation avec le marché du travail local.

# Good practices d'accessibilités que je voudrai appliquer à ce projet :

- Sémentique html : utiliser dans l'ordre h1 h2 h3. pour modifier les tailles, utiliser plutot le style et non les balises h. Du point de vue sémentique, grand titre de la page h1, sous titre h2, sous sous titre h3 <etc> : OK
- Contrastes répondant aux critères AAA

# Améliorations souhaitées :

### Partout :
- un maximum de critères d'accessibilité valides
- un bouton qui permet de passer du white mode au dark mode
  
### Page Resume

- Rendre accessible mon CV, actuellement display en tant qu'image, une liseuse ne pourrait pas lire mon CV, uniquement son alt qui ne contient pas toutes les informations. J'ai trouvé ce package de pdf viewer https://www.npmjs.com/package/ng2-pdf-viewer, je ne sais pas encore s'il est en mesure de rendre accessible mon cv en pdf
- Ajoute un bouton qui permet le téléchargement ou l'impression du CV, un lien qui ouvrirai vers une autre tab pourrait tout à fait convenir

### Une page dédiée aux informations pour développer un site web accessible avec des exemples

## Problèmes rencontrés :

<details>
<summary>Documentation du Problème de Prérendu avec Paramètres de route Dynamiques</summary> 
Contexte
Lors de la configuration du prérendu pour une application Angular utilisant des routes dynamiques, une erreur est survenue indiquant que la fonction getPrerenderParams est manquante pour la route projects/:id. Le projet utilise des composants et services autonomes avec Angular v19 et la nouvelle fonctionnalité de mode de rendu au niveau des routes.

Erreurs Rencontrées
Erreur de Prérendu:
```
The 'projects/:id' route uses prerendering and includes parameters, but 'getPrerenderParams' is missing. Please define 'getPrerenderParams' function for this route in your server routing configuration or specify a different 'renderMode'.
```

Erreur de Correspondance de Route:

```
The 'projects/*' server route does not match any routes defined in the Angular routing configuration (typically provided as a part of the 'provideRouter' call). Please make sure that the mentioned server route is present in the Angular routing configuration.
```
Configuration Actuelle

app.routes.ts

```
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projets', component: ProjetsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects/:name', component: ProjectDetailsComponent }
];
```
app.routes.server.ts
```
.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProjectsService } from './_services/projects.service';
import { inject } from '@angular/core';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'projects/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const projectService = inject(ProjectsService);
      const projects = projectService.GetProjects();
      return projects.map(project => ({ id: project.id.toString() }));
    },
  }
];
```
Fichier projects.service.ts
```
import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    { id: 0, name: 'Sample Angular App', summary: 'Test Description', description: 'Lorem ipsum dolor sit amet...', projectlink: '//www.github.com', pictures: [], tags: [tag.ANGULAR, tag.TYPESCRIPT] },
    // autres projets...
  ];

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new TypeError("There is no project that matches the id: " + id);
    }
    return project;
  }
}
```
Fichier main.ts
```
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  ```

  Solution : Creer manuellement des pages statiques pour ne plus rencontrer ce problème
  OU trouver une version d'angular antérieure qui supporterai angular universal
  </details>
