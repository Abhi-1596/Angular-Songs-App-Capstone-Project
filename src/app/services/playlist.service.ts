import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayListModel } from '../songs_N_playlist/play-list/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private api_url = "http://localhost:3000/playlist";

  constructor(private http: HttpClient) {}

  getPlaylist(): Observable<IPlayListModel[]> {
    return this.http.get<IPlayListModel[]> (this.api_url);
  }

  createPlaylist(data): Observable<IPlayListModel[]> {
    return this.http.post<IPlayListModel[]> (this.api_url, data);
  }
}