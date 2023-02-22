import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';
import { CampaignEvent,EventWeapon } from 'src/app/shared/Interfaces';
import { CampaignManagmentService } from '../shared/campaign-managment.service';
import { categoryFilter } from '../shared/shared.module';
/**
 * Service that manages the events of a particular campaign
 */
@Injectable()
export class CampaignEventService {
  private id:number = -1;
  private modifiedDate:string = "0";
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
    this.getEvents().subscribe(
      events => {
        this.events = events;
      }
    );
  }

  getEvents():Observable<CampaignEvent[]> {
    if(this.events.length!=0) return of(this.events);
    return this.http.get<CampaignEvent[]>("/assets/"+this.id+"_killEvents.json").pipe(
      tap( events => this.modifiedDate = events[events.length-1].eventTime)
    );
  }

  getDate():string {
    return this.modifiedDate;
  }





  

}