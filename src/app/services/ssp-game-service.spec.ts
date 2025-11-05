import { TestBed } from '@angular/core/testing';

import { SspGameService } from './ssp-game-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SspGameService', () => {
  let service: SspGameService;
  let httpMock: HttpTestingController;

  const BASE_API_URL = 'api/v1/ssp';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SspGameService],
    });

    service = TestBed.inject(SspGameService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send POST request to play endpoint with correct body', () => {
    const mockResponse = { computerMove: 'PAPER', result: 'WIN' };

    service.play('STONE', 'RANDOM').subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${BASE_API_URL}/play`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ playerMove: 'STONE', strategyName: 'RANDOM' });

    req.flush(mockResponse);
  });

  it('should use RANDOM as default strategyName', () => {
    const mockResponse = { computerMove: 'SCISSORS', result: 'LOSE' };

    service.play('PAPER').subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${BASE_API_URL}/play`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ playerMove: 'PAPER', strategyName: 'RANDOM' });

    req.flush(mockResponse);
  });

  it('should handle HTTP error gracefully', () => {
    const mockError = { message: 'Network error' };

    service.play('STONE').subscribe({
      next: () => fail('Expected an error, not a success response'),
      error: (error) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Server Error');
      },
    });

    const req = httpMock.expectOne(`${BASE_API_URL}/play`);
    req.flush(mockError, { status: 500, statusText: 'Server Error' });
  });
});
