import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'projets', component: ProjetsComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'projects/0', component: ProjectDetailsComponent},
    { path: 'projects/1', component: ProjectDetailsComponent},
    { path: 'projects/2', component: ProjectDetailsComponent},
    { path: 'projects/3', component: ProjectDetailsComponent}

];
