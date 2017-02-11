import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public isDarkTheme: boolean = false;
   constructor(private router : Router) {
  }
   gotoNewUser(): void {
    this.router.navigate(['user/registration'])
  }
}
