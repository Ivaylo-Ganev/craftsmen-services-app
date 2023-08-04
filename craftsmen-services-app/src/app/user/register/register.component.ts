import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) {}

  registerSubmitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }
    const {email, username, phone, userPhoto, password} = form.value;

    this.authService.register(email, username, phone, userPhoto, password).subscribe(()=> {
      this.router.navigate(['/listings']);
    })
    
  }
}
