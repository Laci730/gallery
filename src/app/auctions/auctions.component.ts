import { Component } from '@angular/core';
import { auctionItems } from '../auction-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auctions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./auctions.component.html",
  styleUrl: './auctions.component.css'
})
export class AuctionsComponent {
  auctionItems = [...auctionItems];
}
