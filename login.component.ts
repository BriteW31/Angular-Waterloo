import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  email: string = '';

  constructor(private router: Router) {}

  onNext() {
    this.router.navigate(["/password"]);
  }
}
