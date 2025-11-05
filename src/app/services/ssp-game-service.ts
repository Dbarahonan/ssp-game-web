import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_API_URL = 'api/v1/ssp';

@Injectable({
  providedIn: 'root'
})
export class SspGameService {
  
  constructor(private http: HttpClient) {}

  play(playerMove: string, strategyName: string = 'RANDOM') {
    return  this.http.post<any>(`${BASE_API_URL}/play`, { playerMove, strategyName });
  }

}
