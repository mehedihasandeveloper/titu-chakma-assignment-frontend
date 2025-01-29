import { Component } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  user = {
    fullName: '',
    username: '',
    password: ''
  };

  constructor(private userService: ProductService) {}  // Inject the UserService

  // This method is called when the form is submitted
  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log('User created:', response);
        // Optionally navigate to a different page or show a success message
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}
