import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist.service';
import { IPlayListModel } from '../play-list/playlist.model';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

  _id: number;
  playLists: IPlayListModel[];

  constructor(private playListService: PlaylistService,
    private router: Router,
    private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe(res => {
      this._id = +res.playlist_id;
      console.log(this._id);
    });

    this.playListService.getPlaylist().subscribe(res => {
      this.playLists = res;
      console.log(res);
    });
  }

  previous(id: number) {
    if (id > 1) {
      this.router.navigate(['/play_list', id - 1]);
    }
  }

  next(id: number) {
    if (id < this.playLists.length) {
      this.router.navigate(['/play_list', id + 1]);
    }
  }

  back() {
    this.router.navigate(['/play_list']);
  }
}