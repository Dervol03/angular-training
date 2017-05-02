import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data'
import {Contact} from './models/contact';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactsService {
  public static API_ENDPOINT = "http://localhost:4201/api";


  constructor(private http: Http) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get(`${this.apiEndpoint}/contacts`)
                    .map((response) => response.json())
                    .map((data) => data.contacts as Contact[] )
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
                    .map((response) => response.json())
                    .map((data) => data.contact);
  }

  private get apiEndpoint(): string {
    return ContactsService.API_ENDPOINT;
  }
}
