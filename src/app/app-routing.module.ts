import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { ErrorsComponent } from './errors/errors.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './registration_N_login/login-form/login-form.component';
import { RegistrationFormComponent } from './registration_N_login/registration-form/registration-form.component';
import { PlayListComponent } from './songs_N_playlist/play-list/play-list.component';
import { SongsListComponent } from './songs_N_playlist/songs-list/songs-list.component';

import { SongsService } from './services/songs.service';
import { SongDetailsComponent } from './songs_N_playlist/song-details/song-details.component';
import { PlaylistService } from './services/playlist.service';
import { PlaylistDetailsComponent } from './songs_N_playlist/playlist-details/playlist-details.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'songs_list/:song_id', component: SongDetailsComponent },
  { path: 'songs_list', component: SongsListComponent },
  { path: 'play_list/:playlist_id', component: PlaylistDetailsComponent },
  { path: 'play_list', component: PlayListComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorsComponent }
];

@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    SongsListComponent,
    SongDetailsComponent,
    PlayListComponent,
    PlaylistDetailsComponent,
    PlayerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    SongsService,
    PlaylistService
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }