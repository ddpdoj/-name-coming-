import { TestBed, inject } from '@angular/core/testing';

import { MyCommonService } from './common.service';

describe('ErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCommonService]
    });
  });

  it('should be created', inject([MyCommonService], (service: MyCommonService) => {
    expect(service).toBeTruthy();
  }));
});
