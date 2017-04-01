import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {auth} from './auth.reducer';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationService} from './authentication.service';

const routes: Routes = [
  {component: LoginComponent, path: 'login'}
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({ auth }),
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
