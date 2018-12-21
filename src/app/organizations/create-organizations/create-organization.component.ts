import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss']
})
export class CreateOrganizationsComponent {
  public organization: any = {};
  public formControl = new FormControl();

  constructor(private apiService: ApiService) {
  }

  public submitForm() {
    this.apiService.createOrganization(this.organization).subscribe(() => {
      console.log('success');
    });
  }
}
