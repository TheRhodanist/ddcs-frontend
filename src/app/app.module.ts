import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';


import { DashboardComponent } from './routing-components/dashboard/dashboard.component';
import { SharedUIModule } from './shared/shared.module';
import { CampaignDetailViewComponent } from './campaign-view/campaign-detail/campaign-detail-view/campaign-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CampaignDetailViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
