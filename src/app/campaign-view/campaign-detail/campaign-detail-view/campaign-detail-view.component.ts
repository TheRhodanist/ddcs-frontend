import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Campaign, CampaignEvent } from 'src/app/shared/Interfaces';
import { CampaignManagmentService } from 'src/app/shared/campaign-managment.service';
import { CampaignEventService } from '../../campaign-events.service';

@Component({
  templateUrl: './campaign-detail-view.component.html',
  styleUrls: ['./campaign-detail-view.component.scss'],
  providers: [CampaignEventService],
})
export class CampaignDetailViewComponent implements OnInit {
  id: string = '-1'; //Id of the loaded campaign,(-1) for undefined
  isLoading: boolean = false;
  modifiedDate: string = '0';
  mapName: string = 'undefined';
  /**
   * List of events belonging to the currently loaded campaign
   */
  events: CampaignEvent[] = [];
  /**
   *
   */
  constructor(
    private route: ActivatedRoute,
    private campaignEventService: CampaignEventService,
    private campaignManager: CampaignManagmentService
  ) {}
  /**
   *
   */
  ngOnInit(): void {
    //Get the campaign id from the route/url
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      //load the eventservice for the id that was extracted
      this.campaignEventService.loadCampaignById(this.id);
      this.campaignEventService.getEvents().subscribe((events) => {
        this.modifiedDate = this.campaignEventService.getDate();
        this.campaignManager
          .getMap(this.id)
          .subscribe((m) => (this.mapName = m));
        this.events = events;
        this.events = this.events.filter((event) =>
          event.campaign!.includes(this.id.toString())
        );
        this.isLoading = false;
      });
    });
  }

  getDatefromEpoch(epoch: string): string {
    let date = new Date(Number(epoch));
    return date.toLocaleString('en-GB', { timeZone: 'UTC' });
  }
}
