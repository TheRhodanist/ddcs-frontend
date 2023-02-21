import { Component, OnInit } from '@angular/core';
import { CampaignManagmentService } from 'src/app/shared/campaign-managment.service';
import { Campaign } from 'src/app/shared/Interfaces';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  currentCampaign?:Campaign = undefined;

  constructor(
    private campaignManager:CampaignManagmentService,
  ) {}

    ngOnInit(): void {
        this.campaignManager.getCampaigns().subscribe(
          campaigns => this.currentCampaign = campaigns[campaigns.length-1]
        );
    }
}
