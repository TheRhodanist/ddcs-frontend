import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>("../../assets/campaigns.json").pipe(
      tap(campaigns => campaigns.forEach(
        campaign => campaign.campaignId = CampaignManagmentService.getIdFromFullId(campaign._id)
      )),
    )

  }

  getCurrentCampaign(): Observable<Campaign> | undefined {
    return undefined;//this.getCampaigns().subscribe
  }
  /**
   * Get a campaign based on a full triplet id
   * @param id the id for which to get the campaign
   * @returns the campaign for the given id, undefined if none is found 
   */
  getCampaignByFullId(id: number): Campaign | undefined {
    //TODO refactor for better performance
    let filteredCampaigns = this.campaigns.filter(
      camp => CampaignManagmentService.getIdFromFullId(camp.campaignId!.toString()) == id.toString()
    );
    if (filteredCampaigns.length != 0) { return filteredCampaigns[0] }
    return undefined;
  }

  /**
   * Get a campaign based on a shortened id
   * @param id the id for which to get the campaign
   * @returns the campaign for the given id, undefined if none is found 
   */
  getCampaignById(id: number): Campaign | undefined {
    //TODO refactor for better performance
    let filteredCampaigns = this.campaigns.filter(
      camp => camp.campaignId == id.toString()
    );
    if (filteredCampaigns.length != 0) { return filteredCampaigns[0] }
    return undefined;
  }

  static getIdFromFullId(id: string): string {
    let localId = "";
    localId = id.split("_")[2]
    return localId;
  }
  static getMapFromFullId(id: string): string {
    let map = "";
    let filteredId = id.split("_")[1];
    map = filteredId.split("-")[2];
    if (map === "CA") return "Caucasus";
    return map;
  }
  getMap(id: string): string {
    return CampaignManagmentService.getMapFromFullId(id);
  }
  getId(id: string): string {
    return CampaignManagmentService.getIdFromFullId(id);
  }
}

