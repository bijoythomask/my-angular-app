import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UserService} from '../app.user.service';
import {User} from '../user';

@Component({
    // selector: 'app.user-list',
    templateUrl: 'app.user-list.html' ,
    styles : [],

})
export class UserListComponent implements OnInit {

    users: User[];
    constructor(
        private userService : UserService,
        private router: Router) { }

    ngOnInit() {
         this.userService.getUsers().then(users => this.users = users );
    }

    private handleResponse(users: User[]): void {
        this.users = users;
    }

    getUsers(): void {
        this.userService.getUsers()
        .then(users => this.users = users);
    }

    gotoDetails(userid: String){
        this.router.navigate(['user/edit', userid]);
    }
}