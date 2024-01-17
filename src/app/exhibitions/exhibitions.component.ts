import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { exhibitionItems } from '../exhibition-data';

@Component({
  selector: 'app-exhibitions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exhibitions.component.html',
  styleUrl: './exhibitions.component.css'
})
export class ExhibitionsComponent {
  exhibitionItems = [...exhibitionItems];
}
