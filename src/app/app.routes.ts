import {ContactDetailsComponent} from './contact-details.component';
import {ContactListComponent} from './contact-list.component';
import { Routes } from '@angular/router';
import {ContactEditComponent} from './contact-edit.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ContactListComponent,
  },
  {
    path: 'nowhere',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: "contacts/:id",
    component: ContactDetailsComponent,
  },
  {
    path: "contacts/:id/edit",
    component: ContactEditComponent,
  },
  {
    path: "**",
    redirectTo: "/",
  }
];
