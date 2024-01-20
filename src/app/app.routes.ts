import { Routes } from '@angular/router';
import { AuctionDetailsComponent } from './auction-details/auction-details.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {
        path: '', 
        component: MainPageComponent
    },
    {
        path: 'auctions/:auctionId',
        component: AuctionDetailsComponent
    }
];
