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

  constructor(private songsListService: SongsService,
              private router: Router) { }

  ngOnInit(): void {
    this.songsListService.getSongsList().subscribe(res => this.songsList = res);
  }

  viewDeatils(item) {
    this.router.navigate(['/songs_list', item.id])
  }
}