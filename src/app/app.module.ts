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
import {ApiEndpoints} from './api-endpoints';

@NgModule({
  declarations: [ContactsAppComponent, ContactListComponent, ContactDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ApiEndpoints,
  ]
})
export class ContactsModule {

}
