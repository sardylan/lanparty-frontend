import {TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';

describe('ApiService', () => {

  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientModule]
    });

    apiService = TestBed.get(ApiService);
  });

  it('should try login with success', () => {
    apiService.login('admisn', 'admin').then(value => {
      expect(value).toBeTruthy();
    });
  });
});
