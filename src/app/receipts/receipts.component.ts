import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-receipts-list',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent implements OnInit {
  public receipts: any[];

  constructor(public apiService: ApiService) {
  }

  public ngOnInit() {
    this.apiService.getReceipts().subscribe((data) => {
      this.receipts = data;
    });
  }
}
