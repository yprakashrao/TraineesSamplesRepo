import { TestBed } from '@angular/core/testing';

import { Project3Service } from './project3.service';

describe('Project3Service', () => {
  let service: Project3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Project3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
