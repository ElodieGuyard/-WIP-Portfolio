import { Component, Input } from '@angular/core';
import { infos } from "../_models/Info";


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactEmail = infos.CONTACT_EMAIl; // Récupère l'email depuis la configuration _model/Infos
  contactLinkedIn = infos.CONTACT_LINKEDIN; // Récupère le lien linkedIn depuis la configuration _model/Infos
  contactGithub = infos.CONTACT_GITHUB; // Récupère le lien linkedIn depuis la configuration _model/Infos

}
