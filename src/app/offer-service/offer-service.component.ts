import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-offer-service',
  templateUrl: './offer-service.component.html',
  styleUrls: ['./offer-service.component.scss']
})
export class OfferServiceComponent implements OnInit {
  public service: any = {};
  public formControl = new FormControl();
  public organizations: any[];

  constructor(private apiService: ApiService) {
  }

  public ngOnInit() {
    this.apiService.getOrganizations().subscribe((data) => {
      this.organizations = data;
    });
  }

  public submitForm() {
    this.apiService.offerService(this.service).subscribe(() => {
      alert('success');
    });
  }
}
