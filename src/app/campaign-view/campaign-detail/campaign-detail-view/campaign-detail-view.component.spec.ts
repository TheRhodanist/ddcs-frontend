import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailViewComponent } from './campaign-detail-view.component';

describe('CampaignDetailViewComponent', () => {
  let component: CampaignDetailViewComponent;
  let fixture: ComponentFixture<CampaignDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignDetailViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
