import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent {
  public formControl = new FormControl();
  public roles: string[] = ['BUYER', 'SELLER', 'ADMIN'];
}
