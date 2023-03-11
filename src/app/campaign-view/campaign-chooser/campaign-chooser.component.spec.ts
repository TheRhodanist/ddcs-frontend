import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignChooserComponent } from './campaign-chooser.component';

describe('CampaignChooserComponent', () => {
  let component: CampaignChooserComponent;
  let fixture: ComponentFixture<CampaignChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignChooserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
