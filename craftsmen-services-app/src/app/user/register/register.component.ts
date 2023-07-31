import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) {}

  registerSubmitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }
    const {email, username, password} = form.value;

    this.userService.register(email, username, password).subscribe(()=> {
      this.router.navigate(['/listings']);
    })
    
  }
}
