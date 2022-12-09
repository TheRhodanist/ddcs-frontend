import { TestBed } from '@angular/core/testing';

import { UnitinfoService } from './unitinfo.service';

describe('UnitinfoService', () => {
  let service: UnitinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
