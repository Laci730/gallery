import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AuctionsComponent } from '../auctions/auctions.component';
import { ExhibitionsComponent } from '../exhibitions/exhibitions.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    AboutComponent,
    AuctionsComponent,
    ExhibitionsComponent,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  image = "../../assets/img/main.png";
}
