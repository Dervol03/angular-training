import {Component, OnInit} from '@angular/core';
import { Contact } from './models/contact';
import {replacementContact} from 'app/data/contact-data';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
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
