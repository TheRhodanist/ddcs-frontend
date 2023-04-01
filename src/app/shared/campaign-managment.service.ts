import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, filter, map, Observable, of, Subject, tap } from 'rxjs';
import { Campaign } from './Interfaces';

@Injectable({
  providedIn: 'root',
})
/**
 * Manages all the campaigns and provides function to fetch those and extract informations out of them
 */
export class CampaignManagmentService {
  private campaigns: Campaign[] = [];
  selectedCampaign?: Campaign = undefined;
  private campaignFetcher: Subject<Campaign[]> = new Subject();

  constructor(private http: HttpClient) {
    this.http
      .get<Campaign[]>('../../assets/campaigns.json')
      .pipe(
        tap((campaigns) => {
          //Reverse the Array so the latest campaign is the first element
          this.campaigns = campaigns.reverse();
          //Add the shortened id into each campaign
          campaigns.forEach(
            (campaign) =>
              (campaign.campaignId = CampaignManagmentService.getIdFromFullId(
                campaign._id
              ))
          );
        })
      )
      .subscribe(this.campaignFetcher);
  }

  /**
   * Fetches an array of campaigns, and caches it if not yet fetched
   * @returns an array of campaigns
   */
  getCampaigns(): Observable<Campaign[]> {
    if (this.campaigns.length !== 0) return of(Array.from(this.campaigns));
    return this.campaignFetcher;
  }

  getCurrentCampaign(): Observable<Campaign> | undefined {
    return undefined; //this.getCampaigns().subscribe
  }
  /**
   * Get a campaign based on a full triplet id
   * @param id the id for which to get the campaign
   * @returns the campaign for the given id, undefined if none is found
   */
  getCampaignByFullId(id: number): Observable<Campaign> {
    //TODO refactor for better performance
    let filteredCampaigns = this.campaigns.filter(
      (camp) =>
        CampaignManagmentService.getIdFromFullId(camp.campaignId!.toString()) ==
        id.toString()
    );
    return of(filteredCampaigns[0]);
  }

  /**
   * Get a campaign based on a shortened id
   * @param id the id for which to get the campaign
   * @returns the campaign for the given id, undefined if none is found
   */
  getCampaignById(id: number): Campaign | undefined {
    //TODO refactor for better performance
    let filteredCampaigns = this.campaigns.filter(
      (camp) => camp.campaignId == id.toString()
    );
    if (filteredCampaigns.length != 0) {
      return filteredCampaigns[0];
    }
    return undefined;
  }
  /**
   *
   * @param id short id
   * @returns Returns the mapname as string from the provided full id
   */
  getMapFromId(id: string): Observable<string> {
    return this.getCampaigns().pipe(
      map((campaigns) =>
        CampaignManagmentService.getMapFromFullId(
          campaigns.filter((c) => c._id.includes(id))[0]._id
        )
      )
    );
  }
  /**
   *
   * @param id an id
   * @returns Returns the mapname based on the provided id (either format)
   */
  getMap(id: string): Observable<string> {
    if (id.startsWith('Drex'))
      return of(CampaignManagmentService.getMapFromFullId(id));
    return this.getMapFromId(id);
  }
  /**
   * Returns the short id based of the full id
   * @param id full id
   * @returns short id
   */
  static getIdFromFullId(id: string): string {
    let localId = '';
    localId = id.split('_')[2];
    return localId;
  }
  /**
   *Returns the mapname extracted from the full id
   * @param id full id
   * @returns mapname
   */
  static getMapFromFullId(id: string): string {
    let map = '';
    let filteredId = id.split('_')[1];
    map = filteredId.split('-')[2];
    if (map === 'CA') return 'Caucasus';
    return map;
  }
}
