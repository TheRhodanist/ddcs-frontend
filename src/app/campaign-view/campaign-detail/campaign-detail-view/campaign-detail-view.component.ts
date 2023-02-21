import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Campaign,CampaignEvent } from 'src/app/shared/Interfaces';
import { CampaignManagmentService } from 'src/app/shared/campaign-managment.service';
import { CampaignEventService } from '../../campaign-events.service';

@Component({
  templateUrl: './campaign-detail-view.component.html',
  styleUrls: ['./campaign-detail-view.component.scss'],
  providers: [CampaignEventService]
})
export class CampaignDetailViewComponent implements OnInit{
  id: number=-1; //Id of the loaded campaign,(-1) for undefined
  /**
   * List of events belonging to the currently loaded campaign
   */
  events: CampaignEvent[] = []; 
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
    //Get the campaign id from the route/url
    this.route.params.subscribe(params => {
      this.id = params['id'];
      //load the eventservice for the id that was extracted
    this.campaign = this.campaignManagmentService.getCampaignById(this.id);
    if(this.campaign != undefined) {
      this.campaignEventService.loadCampaignById(this.id);
      this.campaignEventService.getEvents().subscribe( events => {
        this.events = events.filter( event => event.eventCode == "KILL");
      })
    }
    });
    
    
  }

}
