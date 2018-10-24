import { NgModule } from '@angular/core';

import { CreateUsersComponent } from './create-users/create-users.component';
import { MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    UsersComponent,
    CreateUsersComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [
    UsersComponent,
    CreateUsersComponent,
    UsersListComponent
  ],
  bootstrap: []
})
export class UsersModule { }
