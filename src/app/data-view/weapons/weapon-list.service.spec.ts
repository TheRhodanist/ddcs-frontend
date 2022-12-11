import { TestBed } from '@angular/core/testing';

import { WeaponListService } from './weapon-list.service';

describe('WeaponListService', () => {
  let service: WeaponListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
