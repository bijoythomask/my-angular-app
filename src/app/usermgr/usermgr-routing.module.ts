import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/app.user-list.component'
import { UserRegistrationComponent } from './user-create/app.user-registration.component';
import { UserEditComponent } from './user-edit/app.user-edit.component';
import { UserService } from './app.user.service';

const routes: Routes = [
    { path: 'user/registration', component: UserRegistrationComponent },
    { path: 'user/list', component: UserListComponent },
    { path: 'user/edit/:id', component: UserEditComponent },
    { path: 'user', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UsermgrRoutingModule {


}
