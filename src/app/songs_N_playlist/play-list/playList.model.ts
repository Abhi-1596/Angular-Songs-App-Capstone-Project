export interface IPlayListModel {
    playlist_id: number;
    playlist_name: string;
    playlist_songs: [
        song_id: number,
        song_name: string,
        song_album: string,
        song_link: string
    ];
}