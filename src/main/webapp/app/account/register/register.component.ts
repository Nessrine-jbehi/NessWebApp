import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'jhi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./style.scss'],
})
export class RegisterComponent {
  error = false;

  registerForm = this.fb.group({
    email: ['', [Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    details: ['', [Validators.minLength(5), Validators.maxLength(254)]],
  });

  constructor(private registerService: RegisterService, private fb: FormBuilder) {}

  register(): void {
    this.error = false;
  }
}
