import { UsersComponent } from './users/users.component';
import { OrganizationsComponent } from './organizations/organizations.component';

export const ROUTES = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'organization', component: OrganizationsComponent }
];
