import {Component, OnInit} from '@angular/core';
import { Contact } from './models/contact';
import {replacementContact} from 'app/data/contact-data';
import {ContactsService} from './contacts.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/race';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/takeUntil';
import {EventBusService} from './event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  contacts: Observable<Contact[]>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService,
              private eventBus: EventBusService) {
  }

  trackByImage(image: string, contact: Contact): string {
    return contact.image;
  }

  changeContact(): void {
    this.contacts[0] = replacementContact;
  }

  ngOnInit(): void {
    // apply switchMap on the searchTerm. When a new searchTerm comes in, it unsubscribes from the previous getContacts() Oberservable.
    this.contacts = this.terms$.debounceTime(200)
                        .distinctUntilChanged()
                        .switchMap((searchTerm) => this.contactsService.searchContact(searchTerm))
                        .merge(this.contactsService.getContacts()
                        .takeUntil(this.terms$));
    this.eventBus.emit("titleUpdateEvent", "Contacts");
  }


}
