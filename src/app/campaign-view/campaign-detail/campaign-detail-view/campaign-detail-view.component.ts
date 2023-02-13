import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Campaign } from 'src/app/services/Interfaces';
import { CampaignManagmentService } from 'src/app/shared/campaign-managment.service';
import { CampaignEventService } from '../../campaign-events.service';

@Component({
  templateUrl: './campaign-detail-view.component.html',
  styleUrls: ['./campaign-detail-view.component.scss']
})
export class CampaignDetailViewComponent implements OnInit{
  private id: number=-1; //Id of the loaded campaign,(-1) for undefined
  /**
   * List of events belonging to the currently loaded campaign
   */
  events: Event[] = []; 
  /**
   * The currently loaded campaign
   */
  campaign?:Campaign = undefined;

  /**
   * 
   */
  constructor(
    private route: ActivatedRoute,
    private campaignEventService: CampaignEventService,
    private campaignManagmentService: CampaignManagmentService,
  ) {}
  /**
   * 
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.campaign = this.campaignManagmentService.getCampaignById(this.id);
    if(!this.campaign === undefined) {

    }
  }

}
