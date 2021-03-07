import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentComponent } from './agent/agent.component';
import { MissionComponent } from './mission/mission.component';
import { ShowMissionsComponent } from './mission/show-missions/show-missions.component';
import { ShowAgentsComponent } from './agent/show-agents/show-agents.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    MissionComponent,
    ShowMissionsComponent,
    ShowAgentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
