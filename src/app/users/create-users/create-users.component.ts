import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent {
  public user: any = {};
  public formControl = new FormControl();
  public roles: string[] = ['BUYER', 'SELLER', 'ADMIN'];

  constructor(private apiService: ApiService) {
  }

  public submitForm() {
    this.apiService.createUser(this.user).subscribe(() => {
      console.log('success');
    });
  }
}
