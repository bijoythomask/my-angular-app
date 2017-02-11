import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../app.user.service';

import 'rxjs/add/operator/switchMap';

@Component({
    // selector: 'app.user-edit',
    templateUrl: 'app.user-edit.component.html',
})
export class UserEditComponent implements OnInit {

    user: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.userService.getUser(+params['id']))
            .subscribe(user => this.user = user);
    }

    private handleResponse(_user: User): void {
        this.user = _user;
        console.log('User is initilized' + JSON.stringify(this.user, null, 2) )
    }

    updateUser(){
        this.userService.updateUser(this.user);
        this.router.navigate(['/user/list']);
    }
}