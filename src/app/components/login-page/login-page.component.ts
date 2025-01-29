import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: ProductService, private router: Router) { }

  // Login method
  onLogin() {
    // First, try with static admin credentials
    if (this.username === 'admin' && this.password === 'admin123') {
      this.errorMessage = '';
      this.router.navigate(['/view-product']); // Redirect to the view product page
      return;
    }

    // // If static credentials don't match, call the backend API
    // this.userService.login(this.username, this.password).subscribe({
    //   next: (response) => {
    //     // Check if the response is valid or successful
    //     if (response === 'Login successful') {
    //       this.errorMessage = '';
    //       this.router.navigate(['/view-product']); // Change this to the appropriate route
    //     } else {
    //       this.errorMessage = 'Invalid username or password';
    //     }
    //   },
    //   error: (error) => {
    //     // If error, show the error message
    //     this.errorMessage = error.error || 'Invalid username or password';
    //   }
    // });
  }
}
