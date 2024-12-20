import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniasComponent } from './unias.component';

describe('UniasComponent', () => {
  let component: UniasComponent;
  let fixture: ComponentFixture<UniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
