import { DataSource } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CampaignManagmentService } from 'src/app/shared/campaign-managment.service';
import { Campaign } from 'src/app/shared/Interfaces';
import { SharedUIModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-campaign-chooser',
  templateUrl: './campaign-chooser.component.html',
  styleUrls: ['./campaign-chooser.component.scss'],
})
export class CampaignChooserComponent implements OnInit {
  data: Campaign[] = [];
  dataSource: MatTableDataSource<Campaign> = new MatTableDataSource(this.data);

  hideEmpty: boolean = true;

  constructor(private campaignManager: CampaignManagmentService) {}

  ngOnInit(): void {
    this.campaignManager.getCampaigns().subscribe((campaigns) => {
      this.data = campaigns.reverse();
      this.update();
    });
  }
  update(): void {
    if (this.hideEmpty) {
      this.dataSource.data = this.data.filter(
        (el) => el.totalMinutesPlayed_blue !== 0
      );
    } else {
      this.dataSource.data = this.data;
    }
  }

  getCampaignName(id: string): string {
    return CampaignManagmentService.getMapFromFullId(id);
  }

  getCampaignId(id: string): string {
    return CampaignManagmentService.getIdFromFullId(id);
  }

  truncateTime(fullTime: string): string {
    let time = '';
    time = fullTime.split('.')[0].replace('T', ' ');
    return time;
  }
}
