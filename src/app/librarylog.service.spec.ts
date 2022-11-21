import { TestBed } from '@angular/core/testing';

import { LibrarylogService } from './librarylog.service';

describe('LibrarylogService', () => {
  let service: LibrarylogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarylogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
