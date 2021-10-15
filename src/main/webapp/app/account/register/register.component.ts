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
  urlFilesList: any[] = ['https://i.ibb.co/fDWsn3G/buck.jpg'];
  registerForm = this.fb.group({
    email: ['', [Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    details: ['', [Validators.minLength(5), Validators.maxLength(254)]],
  });

  constructor(private registerService: RegisterService, private fb: FormBuilder) {}

  register(): void {
    this.error = false;
  }
  uploadFile(event: any): any {
    const reader = new FileReader();
    const file = event.target!.files[0];
    if (event.target!.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads push it to file list
      reader.onload = () => {
        this.urlFilesList.push(reader.result);
      };
    }
  }
}
