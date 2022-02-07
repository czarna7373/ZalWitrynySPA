import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakladkiComponent } from './zakladki.component';

describe('ZakladkiComponent', () => {
  let component: ZakladkiComponent;
  let fixture: ComponentFixture<ZakladkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakladkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakladkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
