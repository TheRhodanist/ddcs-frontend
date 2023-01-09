import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CampaignManagmentService {
  private campaigns: Campaign[] = [];
  selectedCampaign?: Campaign = undefined;
  constructor(
    private http: HttpClient,
    ) { this.getCampaigns();}


    /**
     * Fetches an array of campaigns, and caches it if not yet fetched
     * @returns an array of campaigns
     */
   getCampaigns() {
    if(this.campaigns.length!=0) {return this.campaigns}
    this.http.get<Campaign[]>("../../assets/campaigns.json").subscribe( campaigns => this.campaigns = campaigns);
    return this.campaigns;
  }

  getCurrentCampaign():Campaign {
    return this.campaigns.filter(
      campaign => campaign.end == undefined
    )[0];
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
export interface Campaign {
  _id: number;
  campaignId: number;
  name: string;
  begin: Date;
  end?: Date;
}
