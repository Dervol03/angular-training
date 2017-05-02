import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from "@angular/router";

import { ContactsAppComponent } from './app.component';
import {APP_ROUTES} from './app.routes';
import {ContactListComponent} from './contact-list.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
