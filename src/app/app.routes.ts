import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'projets', component: ProjetsComponent},
    { path: 'contact', component: ContactComponent},
];
