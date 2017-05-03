import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from './models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent {
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter();
}
