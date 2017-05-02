import {ContactListComponent} from './contact-list.component';
import { Routes } from '@angular/router';

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
];
