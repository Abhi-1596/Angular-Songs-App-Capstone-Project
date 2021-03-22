import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISongsListModel } from '../songs_N_playlist/songs-list/songsList.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private api_url = "http://localhost:3000/songsList";

  constructor(private http: HttpClient) { }

  getSongsList(): Observable<ISongsListModel[]> {
    return this.http.get<ISongsListModel[]> (this.api_url);
  }

  addSong(data): Observable<ISongsListModel> {
    return this.http.post<ISongsListModel> (this.api_url, data);
  }

  deleteSong(data) {
    return this.http.delete (this.api_url, data);
  }

}