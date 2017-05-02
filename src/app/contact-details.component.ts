import {Component, OnInit} from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import {ContactsService} from './contacts.service';
import {Contact} from './models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactService: ContactsService,
              private location: Location) {}

  ngOnInit(): void {
    // this.route.params does exist, but returns an observable, instead of a value
    // + turns the ID into a number (as it is provided as string by the route)
    let id = +this.route.snapshot.params["id"];
    this.contact = this.contactService.getContact(id);
  }

  goBack():void {
    this.location.back();
  }
}
