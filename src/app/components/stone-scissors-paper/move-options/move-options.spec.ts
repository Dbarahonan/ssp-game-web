import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveOptions } from './move-options';

describe('MoveOptions', () => {
  let component: MoveOptions;
  let fixture: ComponentFixture<MoveOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
