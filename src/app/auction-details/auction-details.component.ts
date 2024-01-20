import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { auctionItems } from '../auction-data';
import { auctionItem } from '../types';

@Component({
  selector: 'app-auction-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auction-details.component.html',
  styleUrl: './auction-details.component.css'
})
export class AuctionDetailsComponent {
  auctionItem: auctionItem | undefined;

  constructor(private route: ActivatedRoute) {};

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const auctionItemIdRoute = Number(routeParams.get('auctionId'));

    this.auctionItem = auctionItems.find(
      item => auctionItemIdRoute === item.id
    );
  }
}
