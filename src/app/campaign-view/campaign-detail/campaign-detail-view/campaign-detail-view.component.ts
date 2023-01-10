import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './campaign-detail-view.component.html',
  styleUrls: ['./campaign-detail-view.component.scss']
})
export class CampaignDetailViewComponent implements OnInit{
  private id: Number=-1;
  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
}
