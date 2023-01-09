import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignViewRoutingModule } from './campaign-view-routing.module';
import { CampaignChooserComponent } from './campaign-chooser/campaign-chooser.component';
import { CampaignManagmentService } from './campaign-managment.service';


@NgModule({
  declarations: [
    CampaignChooserComponent,
  ],
  imports: [
    CommonModule,
    CampaignViewRoutingModule,
  ],
  providers: [
    CampaignManagmentService,
  ]
})
export class CampaignViewModule { }
