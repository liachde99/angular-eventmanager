import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexAngularComponent } from './index-angular/index-angular.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { EventsComponent } from './event/events/events.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { AuthGuardService } from './login/service/auth-guard.service'
import { LogoutComponent } from './login/logout/logout.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent, },
  { path: "angular", component: IndexAngularComponent},
  { path: "login", component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: "register", component: RegisterComponent},
  { path: "events", component: EventsComponent, canActivate:[AuthGuardService]},
  { path: "add_event", component: AddEventComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
