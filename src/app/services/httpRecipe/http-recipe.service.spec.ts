import { TestBed } from '@angular/core/testing';

import { HttpRecipeService } from './http-recipe.service';

describe('HttpRecipeService', () => {
  let service: HttpRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
