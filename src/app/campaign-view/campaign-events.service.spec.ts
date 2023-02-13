import { TestBed } from '@angular/core/testing';

import { CampaignEventService } from './campaign-events.service';

describe('CampaigEventsService', () => {
  let service: CampaignEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
