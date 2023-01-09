import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';


import { DashboardComponent } from './routing-components/dashboard/dashboard.component';
import { SharedUIModule } from './shared/shared.module';
import { CampaignViewModule } from './campaign-view/campaign-view.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedUIModule,
    CampaignViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
