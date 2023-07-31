import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = [];

  constructor(private _userService: UserService) { }

  ngOninit() {
    this.getUsers();
  }
  getUsers(){
    this._userService.getUsers().subscribe((users:any)=>{
      this.users=users;
    });
  }
  
}
