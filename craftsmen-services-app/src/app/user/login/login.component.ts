import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginSubmitHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.authService.login(email, password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
