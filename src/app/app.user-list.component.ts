import { Component, OnInit } from '@angular/core';

import {UserService} from './app.user.service';
import {User} from './user'

@Component({
    selector: 'user-list',
    templateUrl:'app.user-list.html' ,
    styles : [],

})
export class UserListComponent implements OnInit {

    users : User[];

    constructor(private userService : UserService) { }

    ngOnInit() {
         this.userService.getUsers().then(users => this.users = users);
         console.log("User list component is initilized")
    }

    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
    
}