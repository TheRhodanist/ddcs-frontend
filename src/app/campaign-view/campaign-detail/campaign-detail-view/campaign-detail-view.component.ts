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

  modifiedDate:string = "0";
  mapName:string ="_";
  /**
   * List of events belonging to the currently loaded campaign
   */
  events: CampaignEvent[] = []; 
  /**
   * The currently loaded campaign
   */
  campaign?:Campaign = undefined;
  manager?:CampaignManagmentService = undefined;
  /**
   * 
   */
  constructor(
    private route: ActivatedRoute,
    private campaignEventService: CampaignEventService,
    private campaignManager: CampaignManagmentService,
  ) {
    this.manager = campaignManager;
  }
  /**
   * 
   */
  ngOnInit(): void {
    //Get the campaign id from the route/url
    this.route.params.subscribe(params => {
      this.id = params['id'];
      //load the eventservice for the id that was extracted
    this.campaign = this.campaignManager.getCampaignById(this.id);
    if(this.campaign != undefined) {
      this.campaignEventService.loadCampaignById(this.id);
      this.campaignEventService.getEvents().subscribe( events => {
        this.modifiedDate = this.campaignEventService.getDate();
        this.mapName = this.manager!.getMap(this.campaign!._id);
        this.events = events.reverse();
        this.events = this.events.filter(event => event.campaign!.includes(this.id.toString()));

      })
    }
    });
    
    
  }

  getDatefromEpoch(epoch:string):string {
    let date = new Date(Number(epoch));
    return date.toLocaleString('en-GB', { timeZone: 'UTC' });
  }



}
