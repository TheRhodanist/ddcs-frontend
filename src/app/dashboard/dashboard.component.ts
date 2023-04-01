import { Component, OnInit } from '@angular/core';
import { CampaignManagmentService } from 'src/app/shared/campaign-managment.service';
import { Campaign } from 'src/app/shared/Interfaces';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentCampaign?: Campaign = {
    _id: 'undefined',
    totalMinutesPlayed_blue: -1,
    totalMinutesPlayed_red: -1,
    createdAt: '0',
    updatedAt: '0',
  };
  currentEnabled: boolean = false;

  constructor(private campaignManager: CampaignManagmentService) {}

  ngOnInit(): void {
    this.campaignManager.getCampaigns().subscribe((campaigns) => {
      this.currentCampaign = campaigns[0];
      this.currentEnabled = true;
    });
  }
  getId(id: string): string {
    if (id === 'undefined') return 'undefined';
    return CampaignManagmentService.getIdFromFullId(id);
  }
  getMap(id: string): string {
    if (id === 'undefined') return 'undefined';
    return CampaignManagmentService.getMapFromFullId(id);
  }
}
