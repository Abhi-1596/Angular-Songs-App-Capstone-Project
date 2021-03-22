import { Component, Input } from '@angular/core';

@Component({
  selector: 'song-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() youtube_embed_id: string;
}