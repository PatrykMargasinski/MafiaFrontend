import { AgentService } from 'src/app/shared/agent.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentComponent } from './agent/agent.component';
import { MissionComponent } from './mission/mission.component';
import { ShowMissionsComponent } from './mission/show-missions/show-missions.component';
import { ShowAvailableAgentsComponent } from './agent/show-available-agents/show-available-agents.component';
import {MissionService} from './shared/mission.service';
import {BossService} from './shared/boss.service';
import { JwtModule } from '@auth0/angular-jwt';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BossComponent } from './boss/boss.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { ShowMessageComponent } from './message/show-message/show-message.component';
import { SendMessageComponent } from './message/send-message/send-message.component';
import { MissionCardComponent } from './mission/show-missions/mission-card/mission-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InProgressMissionListComponent } from './mission/in-progress-mission-list/in-progress-mission-list.component';
import { ShowAgentsOnMissionComponent } from './agent/show-agents-on-mission/show-agents-on-mission.component';
import { AgentsForSaleComponent } from './agent/agents-for-sale/agents-for-sale.component';
export function tokenGetter(){
  return sessionStorage.getItem("jwtToken");
}

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    MissionComponent,
    ShowMissionsComponent,
    ShowAvailableAgentsComponent,
    HeaderComponent,
    FooterComponent,
    BossComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MessageComponent,
    ShowMessageComponent,
    SendMessageComponent,
    MissionCardComponent,
    InProgressMissionListComponent,
    ShowAgentsOnMissionComponent,
    AgentsForSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost"],
        disallowedRoutes: []
      }
    }),
    NgbModule
  ],
  providers: [MissionService, BossService,AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
