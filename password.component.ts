import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  standalone: true,
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  password: string = '';

  constructor(private router: Router) {}

  onNext() {
    this.router.navigate(['/welcome']);
  }
}
