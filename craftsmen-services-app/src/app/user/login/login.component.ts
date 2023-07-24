import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService) {}

  loginSubmitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }
    const {email, password} = form.value;
    this.userService.login(email, password).subscribe((data)=> {
      console.log(data);
      
    })
    
  }
}
