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
import { MatTableModule } from '@angular/material/table';
import { CampaignChooserComponent } from './campaign-view/campaign-chooser/campaign-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CampaignChooserComponent,
    CampaignDetailViewComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedUIModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
