import { MissionComponent } from './mission/mission.component';
import { AgentComponent } from './agent/agent.component';
import { BossComponent } from './boss/boss.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GuardService } from './shared/guard.service';
import { MessageComponent } from './message/message.component';
import { ShowAvailableAgentsComponent } from './agent/show-available-agents/show-available-agents.component';
import { ShowAgentsOnMissionComponent } from './agent/show-agents-on-mission/show-agents-on-mission.component';
import { AgentsForSaleComponent } from './agent/agents-for-sale/agents-for-sale.component';
import { AuthComponent } from './auth/auth.component';
import { ShowMessageComponent } from './message/show-message/show-message.component';
import { ShowReportsComponent } from './message/show-reports/show-reports.component';
import { SendMessageComponent } from './message/send-message/send-message.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'mission',component:MissionComponent, canActivate: [GuardService]},
  {path:'agent',component:AgentComponent, canActivate: [GuardService], children:
  [
    {path: 'availableAgents', component: ShowAvailableAgentsComponent},
    {path: 'agentsOnMission', component: ShowAgentsOnMissionComponent},
    {path: 'agentsForSale', component: AgentsForSaleComponent},
  ]},
  {path:'boss',component:BossComponent, canActivate: [GuardService]},
  {path:'message',component:MessageComponent, canActivate: [GuardService], children:
  [
    {path: 'showMessages', component: ShowMessageComponent},
    {path: 'showReports', component: ShowReportsComponent},
    {path: 'sendMessage', component: SendMessageComponent},
  ]},
  {path:'auth',component: AuthComponent, canActivate: [GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
