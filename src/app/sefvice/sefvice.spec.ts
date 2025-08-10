import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sefvice } from './sefvice';

describe('Sefvice', () => {
  let component: Sefvice;
  let fixture: ComponentFixture<Sefvice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sefvice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sefvice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
