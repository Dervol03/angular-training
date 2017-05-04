import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from './contacts.service';
import {Contact} from './models/contact';
import {EventBusService} from './event-bus.service';

export const CONFIRM_EDIT_EXIT = new InjectionToken("confirmEditExit");
export const confirmEditExit = (component: ContactEditComponent ) => {
  return component.usesAction() ? true : window.confirm('Navigate away without saving?');
};

@Component({
  selector: 'trm-contact-edit-component',
  templateUrl: './contact-edit.component.html',
})
export class ContactEditComponent implements OnInit {
  private contact: Contact;
  private _usesAction: boolean;

  constructor(private route: ActivatedRoute,
              private contactService: ContactsService,
              private router: Router,
              private eventBus: EventBusService) {}

  ngOnInit() {
    // this.route.params does exist, but returns an observable, instead of a value
    // + turns the ID into a number (as it is provided as string by the route)
    let id = this.route.snapshot.params["id"];
    this.contactService
      .getContact(id)
      .subscribe((contact) => {
          this.contact = contact;
          this.eventBus.emit("titleUpdateEvent", `Edit: ${contact.name}`);
      });
  }

  save(contact: Contact): void {
    this._usesAction = true;
    this.contactService.updateContact(contact)
      .subscribe((updatedContact) =>  {
        this.eventBus.emit("updateContactEvent", updatedContact);
        this.goToDetails(contact);
      });
  }

  cancel(contact: Contact): void {
    this._usesAction = true;
    this.goToDetails(contact);
  }

  usesAction(): boolean {
    const inUse = this._usesAction;
    this._usesAction = null;
    return inUse;
  }

  private goToDetails(contact: Contact): void {
    this.router.navigate(['contacts', contact.id]);
  }
}
