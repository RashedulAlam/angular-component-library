import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDsComponent } from './demo-ds.component';

describe('DemoDsComponent', () => {
  let component: DemoDsComponent;
  let fixture: ComponentFixture<DemoDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoDsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
