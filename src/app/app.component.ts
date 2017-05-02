import { Component } from '@angular/core';
import { Contact } from './models/contact';
import {CONTACT_DATA, replacementContact} from 'app/data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works!';
  contacts: Contact[] = CONTACT_DATA;

  trackByImage(image: string, contact: Contact): string {
    return contact.image;
  }

  changeContact(): void {
    this.contacts[0] = replacementContact;
  }
}
