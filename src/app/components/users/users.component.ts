import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.getMessages();
  }

  public addUser(): void {
    if (this.user.email && this.user.password && this.user.username) {
      this.userService.addUser(this.user).subscribe(() => this.getMessages());
    }
  }

  public getMessages() {
    this.userService.getUsers()
      .then((data: Array<User>) => this.users = data)
      .catch(() => console.log("Error"));
  }
}
