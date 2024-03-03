import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserSectionComponent } from './header-user-section.component';

describe('HeaderUserSectionComponent', () => {
  let component: HeaderUserSectionComponent;
  let fixture: ComponentFixture<HeaderUserSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderUserSectionComponent]
    });
    fixture = TestBed.createComponent(HeaderUserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
