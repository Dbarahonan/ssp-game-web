import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OponentType } from './oponent-type';

describe('OponentType', () => {
  let component: OponentType;
  let fixture: ComponentFixture<OponentType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OponentType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OponentType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
