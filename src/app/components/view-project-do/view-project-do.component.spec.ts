import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectDoComponent } from './view-project-do.component';

describe('ViewProjectDoComponent', () => {
  let component: ViewProjectDoComponent;
  let fixture: ComponentFixture<ViewProjectDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjectDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
