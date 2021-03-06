import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { UsermgrRoutingModule } from './usermgr-routing.module';
import { UsermgrComponent } from './usermgr.component';
import { UserListComponent } from './user-list/app.user-list.component';
import { UserRegistrationComponent } from './user-create/app.user-registration.component';
import { UserEditComponent } from './user-edit/app.user-edit.component';
import { UserService } from './app.user.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    UsermgrRoutingModule
  ],
  providers: [UserService],
  declarations: [UsermgrComponent, UserRegistrationComponent, UserEditComponent, UserListComponent]
})
export class UsermgrModule { }
