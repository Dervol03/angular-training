import { Component, OnInit } from '@angular/core';
import {Contact} from './models/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from './contacts.service';
import {EventBusService} from './event-bus.service';

@Component({
  selector: 'trm-contact-details-view',
  templateUrl: './contact-details-view.component.html',
})
export class ContactDetailsViewComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactsService,
              private router: Router,
              private eventBus: EventBusService) {}

  ngOnInit(): void {
    this.route.paramMap
              .switchMap((paramMap) => this.contactService.getContact(paramMap.get("id")))
              .subscribe((contact) => {
                this.contact = contact;
                this.eventBus.emit("titleUpdateEvent", contact.name);
              });
  }

  editContact(contact: Contact): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  toContactList(): void {
    this.router.navigate(['/']);
  }
}
