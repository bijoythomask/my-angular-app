import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent , DialogContent} from './app.component';
import { UserListComponent} from './app.user-list.component'
import { UserRegistrationComponent} from './app.user-registration.component';
import { UserEditComponent} from './app.user-edit.component';
import { UserService} from './app.user.service';
import { DialogComponent } from './app.dialog.component';

@NgModule({
  declarations: [
    AppComponent, DialogContent, UserRegistrationComponent, UserEditComponent,UserListComponent, DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'user-registration', component: UserRegistrationComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-edit', component: UserEditComponent },
      { path: 'app-dialog', component: DialogComponent },
      { path: '', component: UserListComponent }
    ])
  ],
  
  providers: [UserService],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
