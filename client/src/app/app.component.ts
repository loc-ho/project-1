import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email], // Email validation
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$'), // At least one uppercase, one lowercase, and one number
        ],
      ],
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      console.log('Form Submitted', this.clientForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper to display validation errors
  get email() {
    return this.clientForm.get('email');
  }

  get password() {
    return this.clientForm.get('password');
  }
}
