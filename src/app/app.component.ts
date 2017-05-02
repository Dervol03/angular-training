import {Component, OnInit} from '@angular/core';
import { Contact } from './models/contact';
import {CONTACT_DATA, replacementContact} from 'app/data/contact-data';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ContactsService,
  ]
})
export class ContactsAppComponent implements OnInit {
  title = 'Angular 2 Master Class setup works!';
  contacts: Contact[];

  constructor(private contactsService: ContactsService) {}

  trackByImage(image: string, contact: Contact): string {
    return contact.image;
  }

  changeContact(): void {
    this.contacts[0] = replacementContact;
  }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }
}
