import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { IPlayListModel } from './playlist.model';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  playLists: IPlayListModel[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getPlaylist().subscribe(res => {
      // console.log(res);
      this.playLists = res;
    });
  }

  createPlaylist() {

  }
}