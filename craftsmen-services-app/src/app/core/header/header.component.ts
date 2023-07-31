import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: AuthService, private router: Router) {}

  logoutHandler() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
