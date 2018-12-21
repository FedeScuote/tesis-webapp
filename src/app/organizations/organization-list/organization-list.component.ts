import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-organizations-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationsListComponent implements OnInit {
  public organizations: any[];
  public regOrganizations: any[];

  constructor(public apiService: ApiService) {
  }

  public ngOnInit() {
    this.apiService.getOrganizations().subscribe((data) => {
      this.organizations = data;
    });
    this.apiService.getRegulatorOrgs().subscribe((data) => {
      this.regOrganizations =  data;
    });
  }
}
