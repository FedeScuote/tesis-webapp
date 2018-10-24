import {HomepageComponent} from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';

export const ROUTES = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'users', component: UsersComponent },
];
