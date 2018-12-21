import { NgModule } from '@angular/core';

import { CreateOrganizationsComponent } from './create-organizations/create-organization.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { OrganizationsListComponent } from './organization-list/organization-list.component';
import { OrganizationsComponent } from './organizations.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrganizationsComponent,
    CreateOrganizationsComponent,
    OrganizationsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    OrganizationsComponent,
    CreateOrganizationsComponent,
    OrganizationsListComponent
  ],
  bootstrap: []
})
export class OrganizationModule { }
