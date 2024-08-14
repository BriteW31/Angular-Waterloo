import { Routes } from '@angular/router';
import {PasswordComponent} from './password/password.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "password", component: PasswordComponent },
    { path: "welcome", component: WelcomeComponent }
];
