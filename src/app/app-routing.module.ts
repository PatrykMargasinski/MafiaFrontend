import { MissionComponent } from './mission/mission.component';
import { AgentComponent } from './agent/agent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'mission',component:MissionComponent},
  {path:'agent',component:AgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
