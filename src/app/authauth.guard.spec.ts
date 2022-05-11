import { TestBed } from '@angular/core/testing';

import { AuthauthGuard } from './authauth.guard';

describe('AuthauthGuard', () => {
  let guard: AuthauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
