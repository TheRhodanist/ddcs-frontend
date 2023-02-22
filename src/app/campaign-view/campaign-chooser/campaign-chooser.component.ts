import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CampaignManagmentService } from 'src/app/shared/campaign-managment.service';
import { Campaign } from 'src/app/shared/Interfaces';

@Component({
  selector: 'app-campaign-chooser',
  templateUrl: './campaign-chooser.component.html',
  styleUrls: ['./campaign-chooser.component.scss'],
})
export class CampaignChooserComponent implements OnInit{
  data:Campaign[] = []
  dataSource:MatTableDataSource<Campaign> = new MatTableDataSource(this.data);

  constructor(
    private campaignManager:CampaignManagmentService,
  ) {}

  ngOnInit(): void {
    this.campaignManager.getCampaigns().subscribe(
      campaigns => this.dataSource.data = campaigns.reverse()
    );
  }

  
  getCampaignName(id:string):string {
    return CampaignManagmentService.getMapFromFullId(id);

  }

  getCampaignId(id:string):string {
    return CampaignManagmentService.getIdFromFullId(id);
  }

  truncateTime(fullTime:string):string {
    let time = "";
    time = fullTime.split(".")[0].replace("T"," ");
    return time;
  }
}
