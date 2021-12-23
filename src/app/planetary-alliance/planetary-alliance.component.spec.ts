import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaryAllianceComponent } from './planetary-alliance.component';

describe('PlanetaryAllianceComponent', () => {
  let component: PlanetaryAllianceComponent;
  let fixture: ComponentFixture<PlanetaryAllianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetaryAllianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaryAllianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
