import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Contact} from './models/contact';
import {ContactsService} from './contacts.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactService: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    return this.contactService.getContact(route.params["id"]);
  }
}
