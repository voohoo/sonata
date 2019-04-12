import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  uri: string = 'http://ws.audioscrobbler.com/2.0/';
  apiKey: string = 'f2e6ced73043fa05396dcdae6f4b7eb0';

  constructor(private http: HttpClient) { }

  getTopTracks() {
    return this.http.get(`${this.uri}?method=chart.gettoptracks&api_key=${this.apiKey}&format=json`);
  }
}
