import { MissionComponent } from './mission/mission.component';
import { AgentComponent } from './agent/agent.component';
import { BossComponent } from './boss/boss.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GuardService } from './shared/guard.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'mission',component:MissionComponent, canActivate: [GuardService]},
  {path:'agent',component:AgentComponent, canActivate: [GuardService]},
  {path:'boss',component:BossComponent, canActivate: [GuardService]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
