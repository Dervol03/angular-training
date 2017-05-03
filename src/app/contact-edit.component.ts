import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from './contacts.service';
import {Contact} from './models/contact';
import {API_ENDPOINT} from './app.tokens';

@Component({
  selector: 'trm-contact-edit-component',
  templateUrl: './contact-edit.component.html',
})
export class ContactEditComponent implements OnInit {
  private contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactsService,
              private router: Router) {}

  ngOnInit() {
    // this.route.params does exist, but returns an observable, instead of a value
    // + turns the ID into a number (as it is provided as string by the route)
    let id = this.route.snapshot.params["id"];
    this.contactService
      .getContact(id)
      .subscribe((contact) => this.contact = contact);
  }

  save(contact: Contact): void {
    this.contactService.updateContact(contact)
      .subscribe(() => this.goToDetails(contact));
  }

  cancel(contact: Contact): void {
    this.goToDetails(contact);
  }

  private goToDetails(contact: Contact): void {
    this.router.navigate(['contacts', contact.id]);
  }
}
