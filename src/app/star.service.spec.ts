import { TestBed, inject } from '@angular/core/testing';

import { StarService } from './star.service';

import { Players } from "./mockup";
import { Clubs } from "./mockup";
import { Coaches } from "./mockup";

describe('StarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarService]
    });
  });

  it('should be created', inject([StarService], (service: StarService) => {
    expect(service).toBeTruthy();
  }));
});
