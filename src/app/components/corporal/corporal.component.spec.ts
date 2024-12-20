import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporalComponent } from './corporal.component';

describe('CorporalComponent', () => {
  let component: CorporalComponent;
  let fixture: ComponentFixture<CorporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
