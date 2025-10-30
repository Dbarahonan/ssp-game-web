import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneScissorsPaper } from './stone-scissors-paper';

describe('StoneScissorsPaper', () => {
  let component: StoneScissorsPaper;
  let fixture: ComponentFixture<StoneScissorsPaper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoneScissorsPaper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoneScissorsPaper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
