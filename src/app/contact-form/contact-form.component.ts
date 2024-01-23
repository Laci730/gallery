import { Component } from '@angular/core';
import { Message } from './message.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  model = new Message("", "");

  onSubmit() {
    this.model.emailAddress = "";
    this.model.message = "";
  }
}
