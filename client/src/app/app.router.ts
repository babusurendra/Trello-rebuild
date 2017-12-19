import {ModuleWithProviders} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import {BoardsComponent} from './components/boards/boards.component';
import {InviteComponent} from './components/invite/invite.component';
import{SettingsComponent} from './components/settings/settings.component';
import {LoginComponent} from './components/login/login.component';
import {HelpComponent} from './components/help/help.component';
import{LogoutComponent} from './components/logout/logout.component';
import{ProfileComponent} from './components/profile/profile.component';

export const router :Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'help',component:HelpComponent},
{path:'invite',component:InviteComponent},
{path:'settings',component:SettingsComponent},
{path:'login',component:LoginComponent},
{path:'boards',component:BoardsComponent},
{path:'logout',component:LogoutComponent},
{path:'profile',component:ProfileComponent}
];
export const routes : ModuleWithProviders = RouterModule.forRoot(router);