import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { ISongsListModel } from '../songs-list/songsList.model';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  _id: number;
  songsList: ISongsListModel[] = [];

  constructor(private songsListService: SongsService,
    private router: Router,
    private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe(res => {
      this._id = +res.song_id;
    });

    this.songsListService.getSongsList().subscribe(res => this.songsList = res);
  }

  previous(id: number) {
    if (id > 1) {
      this.router.navigate(['/songs_list', id - 1]);
    }
  }

  next(id: number) {
    if (id < this.songsList.length) {
      this.router.navigate(['/songs_list', id + 1]);
    }
  }

  back() {
    this.router.navigate(['/songs_list']);
  }
}