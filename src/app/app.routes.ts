import {ContactListComponent} from './contact-list.component';
import { Routes } from '@angular/router';
import {ContactEditComponent} from './contact-edit.component';
import {ContactDetailsViewComponent} from 'app/contact-details-view.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'contacts/0',
        pathMatch: 'full',
      },
      {
        path: 'contacts/:id',
        component: ContactDetailsViewComponent,
      },
      {
        path: 'contacts/:id/edit',
        component: ContactEditComponent,
      },
    ]
  },
  {
    path: 'nowhere',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  }
];
