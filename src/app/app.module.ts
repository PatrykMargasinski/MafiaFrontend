import { AgentService } from 'src/app/shared/agent.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentComponent } from './agent/agent.component';
import { MissionComponent } from './mission/mission.component';
import { ShowMissionsComponent } from './mission/show-missions/show-missions.component';
import { ShowAgentsComponent } from './agent/show-agents/show-agents.component';
import {MissionService} from './shared/mission.service';
import {BossService} from './shared/boss.service';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BossComponent } from './boss/boss.component';
import { PerformMissionComponent } from './mission/perform-mission/perform-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    MissionComponent,
    ShowMissionsComponent,
    ShowAgentsComponent,
    HeaderComponent,
    FooterComponent,
    BossComponent,
    PerformMissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MissionService, BossService,AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
