import {Inject, Injectable} from '@angular/core';
import {Contact} from './models/contact';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
import {Observable} from 'rxjs/Observable';
import {API_ENDPOINT} from './app.tokens';

@Injectable()
export class ContactsService {
  constructor(private http: Http, @Inject(API_ENDPOINT) private apiEndpoint) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get(`${this.apiEndpoint}/contacts`)
      .map((response) => response.json().contacts as Contact[]);
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
                    .map((response) => response.json().contact as Contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiEndpoint}/contacts/${contact.id}`;
    return this.http.put(url, contact)
                    .map((response) => response.json().contact as Contact);
  }

  searchContact(name: string): Observable<Contact[]> {
    const url = `${this.apiEndpoint}/search?text=${name}`;
    return this.http.get(url).map((response) => response.json().contacts as Contact[]);
  }
}
