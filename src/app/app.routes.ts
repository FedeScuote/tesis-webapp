import { UsersComponent } from './users/users.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { OfferServiceComponent } from './offer-service/offer-service.component';

export const ROUTES = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'organization', component: OrganizationsComponent },
  { path: 'receipts', component: ReceiptsComponent },
  { path: 'offer-service', component: OfferServiceComponent }
];
