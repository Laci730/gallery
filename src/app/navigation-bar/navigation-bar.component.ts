import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  isMobile = false;
  isOpened = false;

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointService
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .subscribe((result) => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    })
  }

  changeElement() {
    this.isOpened = !this.isOpened;
  }
}
