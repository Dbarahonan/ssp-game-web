import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { StoneScissorsPaper } from './stone-scissors-paper';
import { SspGameService } from '../../services/ssp-game-service';
import { delay, of, switchMap, throwError, timer } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MoveOptions } from './move-options/move-options';
import { OponentType } from './oponent-type/oponent-type';
import { Result } from './result/result';
describe('StoneScissorsPaper', () => {
  let component: StoneScissorsPaper;
  let fixture: ComponentFixture<StoneScissorsPaper>;
  let mockSspGameService: jasmine.SpyObj<SspGameService>;

  beforeEach(() => {
    mockSspGameService = jasmine.createSpyObj('SspGameService', ['play']);

    TestBed.configureTestingModule({
      imports: [
        StoneScissorsPaper,
        HttpClientTestingModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        FormsModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        OponentType,
        MoveOptions,
        Result,
      ],
      providers: [{ provide: SspGameService, useValue: mockSspGameService }],
    });

    fixture = TestBed.createComponent(StoneScissorsPaper);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.options.length).toBe(3);
    expect(component.playerMove).toBe('');
    expect(component.computerMove).toBe('');
    expect(component.result).toBeNull();
    expect(component.loading).toBeFalse();
    expect(component.opponentType).toBe('RANDOM');
  });

  it('should call play and handle success response', fakeAsync(() => {
    const mockResponse = { computerMove: 'PAPER', result: 'WIN' };
    mockSspGameService.play.and.returnValue(of(mockResponse).pipe(delay(0)));

    component.play('STONE');

    // check initial loading state before observable resolves
    expect(component.loading).toBeTrue();

    tick(); // resolve observable

    // check final state after observable completes
    expect(mockSspGameService.play).toHaveBeenCalledWith('STONE', 'RANDOM');
    expect(component.playerMove).toBe('STONE');
    expect(component.computerMove).toBe('PAPER');
    expect(component.result).toBe('WIN');
    expect(component.loading).toBeFalse();
  }));

  it('should call play and handle error response', fakeAsync(() => {
    mockSspGameService.play.and.returnValue(
      timer(0).pipe(switchMap(() => throwError(() => new Error('Service error'))))
    );

    component.play('SCISSORS');

    // check initial loading state before observable resolves
    expect(component.loading).toBeTrue();

    tick(); // resolve observable

    // check final state after error
    expect(mockSspGameService.play).toHaveBeenCalledWith('SCISSORS', 'RANDOM');
    expect(component.loading).toBeFalse();
    expect(component.playerMove).toBe('');
    expect(component.computerMove).toBe('');
    expect(component.result).toBeNull();
  }));

  it('should reset the game state', () => {
    component.playerMove = 'STONE';
    component.computerMove = 'PAPER';
    component.result = 'WIN';

    component.reset();

    expect(component.playerMove).toBe('');
    expect(component.computerMove).toBe('');
    expect(component.result).toBeNull();
  });
});