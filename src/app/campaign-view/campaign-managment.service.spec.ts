import { TestBed } from '@angular/core/testing';

import { CampaignManagmentService } from './campaign-managment.service';

describe('CampaignManagmentService', () => {
  let service: CampaignManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
