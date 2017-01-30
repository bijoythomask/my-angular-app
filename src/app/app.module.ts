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

import { DialogComponent } from './app.dialog.component';
import { UsermgrModule } from './usermgr';

@NgModule({
  declarations: [
    AppComponent, DialogContent, DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'app-dialog', component: DialogComponent },
      { path: 'user', redirectTo: '/usermgr'}
    ]),
    UsermgrModule
  ],
  providers: [],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
