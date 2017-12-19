import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,MatIconModule} from '@angular/material';
import {MatDatepickerModule, MatNativeDateModule, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS} from '@angular/material';
import { BoardsComponent } from './components/boards/boards.component';
import { SettingsComponent } from './components/settings/settings.component';
import { InviteComponent } from './components/invite/invite.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HelpComponent } from './components/help/help.component';
import {routes} from './app.router';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    SettingsComponent,
    InviteComponent,
    HomeComponent,
    LoginComponent,
    HelpComponent,
    LogoutComponent,
    ProfileComponent,
    NavbarComponent,
    FileSelectDirective
  ],
  imports: [
    routes,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserModule,
    MatMenuModule,
    MatButtonModule, MatCheckboxModule,MatDatepickerModule, MatNativeDateModule,MatFormFieldModule,MatInputModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
