import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private co2Url = 'assets/fossil-fuel-co2-emissions-by-nation_json.json';
  private PaiesesUrl = 'assets/country.json';

  constructor(private http: HttpClient) {}

  getCO2Data(): Observable<any> {
    return this.http.get(this.co2Url);
  }

  getPaises(): Observable<any> {
    return this.http.get(this.PaiesesUrl);
  }
}
