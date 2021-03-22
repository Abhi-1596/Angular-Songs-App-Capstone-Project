import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { ISongsListModel } from './songsList.model';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  songsList: ISongsListModel[];

  // changeLayout: boolean = true;
  gridView: boolean = true;
  rowView: boolean = false;

  constructor(private songsListService: SongsService,
    private router: Router) { }

  ngOnInit(): void {
    this.songsListService.getSongsList().subscribe(res => this.songsList = res);
  }

  viewDeatils(item) {
    this.router.navigate(['/songs_list', item.id])
  }

  viewSongLayout(data) {
    if (data == 'grid') {
      this.gridView = true;
      this.rowView = false;
    } else if (data == 'row') {
      this.gridView = false;
      this.rowView = true;
    }
  }
}