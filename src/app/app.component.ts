import {Component} from '@angular/core';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ContactsService,
  ]
})
export class ContactsAppComponent{
  title = 'Contacts';
}
