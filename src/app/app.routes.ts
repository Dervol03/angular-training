import {ContactListComponent} from './contact-list.component';
import { Routes } from '@angular/router';
import {ContactEditComponent} from './contact-edit.component';
import {ContactDetailsViewComponent} from 'app/contact-details-view.component';

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
    path: 'contacts/:id',
    component: ContactDetailsViewComponent,
  },
  {
    path: 'contacts/:id/edit',
    component: ContactEditComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  }
];
