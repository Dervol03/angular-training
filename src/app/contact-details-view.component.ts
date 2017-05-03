import { Component, OnInit } from '@angular/core';
import {Contact} from './models/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'trm-contact-details-view',
  templateUrl: './contact-details-view.component.html',
})
export class ContactDetailsViewComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactsService,
              private router: Router) {}

  ngOnInit(): void {
    // this.route.params does exist, but returns an observable, instead of a value
    // + turns the ID into a number (as it is provided as string by the route)
    let id = this.route.snapshot.params["id"];
    this.contactService
      .getContact(id)
      .subscribe((contact) => this.contact = contact);
  }

  editContact(contact: Contact): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  toContactList(): void {
    this.router.navigate(['/']);
  }
}
