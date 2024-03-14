import { DragDirective } from './drag.directive';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('DragDirective', () => {

  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            // Implement or mock the required methods here
          },
        },
      ],
    });

    sanitizer = TestBed.inject(DomSanitizer);
  });
  it('should create an instance', () => {
    const directive = new DragDirective(sanitizer);
    expect(directive).toBeTruthy();
  });
});
