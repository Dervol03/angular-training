import {Component, OnInit} from '@angular/core';
import { Contact } from './models/contact';
import {replacementContact} from 'app/data/contact-data';
import {ContactsService} from './contacts.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  contacts: Observable<Contact[]>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {}

  trackByImage(image: string, contact: Contact): string {
    return contact.image;
  }

  changeContact(): void {
    this.contacts[0] = replacementContact;
  }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
    this.terms$.debounceTime(200)
               .distinctUntilChanged()
               .subscribe((searchTerm) => this.search(searchTerm));
  }

  search(value: string): void {
    this.contacts = this.contactsService.searchContact(value);
  }
}
