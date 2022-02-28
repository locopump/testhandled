import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  apiUrl: string = `https://www.pinkvilla.com/photo-gallery-feed-page/page/`;

  constructor(private http: HttpClient) { }

  getPhotos(currentPage: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${currentPage}`)
      .pipe(map((response: any) => response));
  }
}
