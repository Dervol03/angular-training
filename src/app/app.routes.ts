import { Routes } from '@angular/router';
import {ContactEditComponent} from './contact-edit.component';
import {ContactDetailsViewComponent} from 'app/contact-details-view.component';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard.component';
import {ContactResolver} from './contact.resolver';
import {CONFIRM_EDIT_EXIT} from './app.tokens';

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
        resolve: {
          contact: ContactResolver,
        }
      },
      {
        path: 'contacts/:id/edit',
        component: ContactEditComponent,
        canDeactivate: [CONFIRM_EDIT_EXIT]
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
