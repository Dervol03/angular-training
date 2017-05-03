import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from "@angular/router";

import { ContactsAppComponent } from './app.component';
import {APP_ROUTES} from './app.routes';
import {ContactListComponent} from './contact-list.component';
import {ContactDetailsComponent} from './contact-details.component';
import {HttpModule} from '@angular/http';
import {API_ENDPOINT} from './app.tokens';
import { ContactEditComponent } from './contact-edit.component';
import {FormsModule} from '@angular/forms';
import { ContactDetailsViewComponent } from './contact-details-view.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactDetailsViewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    {
      provide: API_ENDPOINT, useValue: "http://localhost:4201/api"
    }
  ]
})
export class ContactsModule {

}
