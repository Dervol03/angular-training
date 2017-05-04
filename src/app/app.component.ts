import {Component, OnInit} from '@angular/core';
import {ContactsService} from './contacts.service';
import {EventBusService} from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class ContactsAppComponent implements OnInit {
  title: string;

  constructor(private eventBus: EventBusService) {}

  ngOnInit() {
    this.eventBus.observe("titleUpdateEvent")
                 .subscribe((newTitle) => this.title = newTitle);
  }
}
