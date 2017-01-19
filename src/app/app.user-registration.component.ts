import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { FormsModule }       from '@angular/forms';

import { User } from './user';
import { UserService } from './app.user.service';

@Component({
    //selector: 'user-registration',
    templateUrl:'app.user-registration.html',
     
})
export class UserRegistrationComponent implements OnInit {

    users : User[];

    user : User;
   
    constructor(
        private userService: UserService,
        private router : Router
    ) { 
        this.user = new User('','','',0,'');
    }

    ngOnInit() {
        console.log('inside User registration componet initilized')
     }

    saveUser(){
      this.userService.addUser(this.user);
      this.gotoDetail();
    }

    gotoDetail(): void {
        this.router.navigate(['/user-list']);
    }

}