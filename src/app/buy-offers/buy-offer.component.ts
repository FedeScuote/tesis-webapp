import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-buy-offer',
  templateUrl: './buy-offer.component.html',
  styleUrls: ['./buy-offer.component.scss']
})
export class BuyOfferComponent implements OnInit {
  public offers: any[];

  constructor(private apiService: ApiService) {
  }

  public ngOnInit() {
    this.apiService.getOffers().subscribe((data) =>
    this.offers = data
    );
  }

  public buyOffer(offer) {
    this.apiService.buyOffer(offer).subscribe((data) => {
      alert('Offer bought successfuly');
    });
  }
}
