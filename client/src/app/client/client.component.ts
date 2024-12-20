import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Client{
  name: string;
  email: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  clientForm: FormGroup;
  clients: Client[]=[];

  constructor(private fb: FormBuilder) {
    // Initialize the form group with controls and validation rules
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$'),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },
    { validator: this.matchPasswords("password","confirmPassword")}
  );
  }

  onSubmit(): void {
    console.log('Submit button clicked!'); // Check if this logs to the console
    if (this.clientForm.valid) {
      const newClient: Client = {
        name: this.clientForm.value.name,
        email: this.clientForm.value.email,
      };
  
      this.clients.push(newClient);
      console.log('New Client:', newClient); // Debug log
      this.clientForm.reset();
    } else {
      console.log('Form is invalid');
      this.clientForm.markAllAsTouched();
    }
  }
  

  matchPasswords(password: string, confirmPassword: string){
    return (formGroup: FormGroup) =>{
      const passControl = formGroup.get(password);
      const confirmPassControl = formGroup.get(confirmPassword);
      if (confirmPassControl?.errors && !confirmPassControl.errors["passwordMismatch"]){
        return;
      }
      if (passControl?.value !== confirmPassControl?.value){
        confirmPassControl?.setErrors({passwordMismatch:true});
      }
      else{
        confirmPassControl?.setErrors(null);
      }
    }
  }
  
  
}
