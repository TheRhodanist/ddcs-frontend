import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignEvent,EventWeapon } from 'src/app/shared/Interfaces';
import { CampaignManagmentService } from '../shared/campaign-managment.service';
import { categoryFilter } from '../shared/shared.module';
/**
 * Service that manages the events of a particular campaign
 */
@Injectable()
export class CampaignEventService {
  private id:number = -1;

  events:CampaignEvent[] = [];
  killEvents:CampaignEvent[] = [];


  constructor(
    private campaignService:CampaignManagmentService,
    private http: HttpClient,
  ) { }
  /**
   * Loads events for the underlying campaign and stores them in an array
   * @param id the campaign id for which events should be loaded
   */
  loadCampaignById(id: number) {
    this.id = id;
    this.http.get<CampaignEvent[]>("/assets/"+this.id+"_killEvents.json").subscribe(
      events => {
        this.events = events;
        this.buildArrays();
      }
    );
  }

  getEvents():Observable<CampaignEvent[]> {
    return this.http.get<CampaignEvent[]>("/assets/"+this.id+"_killEvents.json");
  }

  buildArrays():void {
    this.killEvents = this.events
  }

  getKillEvents():CampaignEvent[] {
    return this.killEvents;
  }

  

}
