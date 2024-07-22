import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemosComponent } from './nemos.component';

describe('NemosComponent', () => {
  let component: NemosComponent;
  let fixture: ComponentFixture<NemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
