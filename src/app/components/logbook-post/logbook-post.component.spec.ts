import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookPostComponent } from './logbook-post.component';

describe('LogbookPostComponent', () => {
  let component: LogbookPostComponent;
  let fixture: ComponentFixture<LogbookPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogbookPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogbookPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
