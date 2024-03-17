import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';

const routes: Routes = [

  {path : '', component:MenuComponent, children : [
    { path :'listUsers',component: UserComponent}

  ]},
  { path: 'signup', component: SignUpComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
