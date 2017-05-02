import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data'
import {Contact} from './models/contact';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(): Contact[] {
    return CONTACT_DATA;
  }

  getContact(id: number): Contact {
    const match = this.getContacts().find((contact) => contact.id === id);
    return match;
  }
}
