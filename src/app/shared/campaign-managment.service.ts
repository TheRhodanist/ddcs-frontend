import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from './Interfaces';

@Injectable({
  providedIn: 'root',
})
export class CampaignManagmentService {
  private campaigns: Campaign[] = [];
  selectedCampaign?: Campaign = undefined;
  constructor(
    private http: HttpClient,
    ) { 
      this.getCampaigns().subscribe(campaigns => this.campaigns = campaigns);
    }


    /**
     * Fetches an array of campaigns, and caches it if not yet fetched
     * @returns an array of campaigns
     */
   getCampaigns():Observable<Campaign[]> {
    return this.http.get<Campaign[]>("../../assets/campaigns.json")
    
  }

  getCurrentCampaign():Observable<Campaign>|undefined {
    return undefined;//this.getCampaigns().subscribe
  }
  /**
   * Get a campaign based on a specific id
   * @param id the id for which to get the campaign
   * @returns the campaign for the given id, undefined if none is found 
   */
  getCampaignById (id: number):Campaign|undefined {
    //TODO refactor for better performance
    let filteredCampaigns = this.campaigns.filter( 
      camp => camp.campaignId == id
    );
    if(filteredCampaigns.length!=0) {return filteredCampaigns[0]}
    return undefined;
  }
}

