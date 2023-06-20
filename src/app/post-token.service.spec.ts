import { TestBed } from '@angular/core/testing';

import { PostTokenService } from './post-token.service';

describe('PostTokenService', () => {
  let service: PostTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
