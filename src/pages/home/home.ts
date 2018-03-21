import { Component } from '@angular/core';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';
import { AudioProvider } from 'ionic-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    myTracks: any[];
    allTracks: any[];
    selectedTrack:any;
     
    constructor(private _audioProvider: AudioProvider) { 
      // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
      this.myTracks = [{
        src: 'https://firebasestorage.googleapis.com/v0/b/gstcalculator-df782.appspot.com/o/test.wav?alt=media&token=14699eca-a39f-42fa-a936-7a24e5665199',
        artist: 'John Mayer',
        title: 'Why Georgia',
        art: 'img/johnmayer.jpg',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
      },
      {
        src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
        artist: 'John Mayer',
        title: 'Who Says',
        art: 'img/johnmayer.jpg',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
      }];
    }
    
    ngAfterContentInit() {     
      // get all tracks managed by AudioProvider so we can control playback via the API
      this.allTracks = this._audioProvider.tracks; 
    }
    
    playSelectedTrack() {
      // use AudioProvider to control selected track 
      this._audioProvider.play(this.selectedTrack);
    }
    
    pauseSelectedTrack() {
       // use AudioProvider to control selected track 
       this._audioProvider.pause(this.selectedTrack);
    }
           
    onTrackFinished(track: any) {
      console.log('Track finished', track)
    } 
 
    // tracks: any;
    // currentTrack: any;
    // progressInterval: any;
 
    // constructor() {
 
    //     this.tracks = [
    //         {title: 'Something About You', artist: 'ODESZA', playing: false, progress: 0},
    //         {title: 'Run', artist: 'Allison Wonderland', playing: false, progress: 0},
    //         {title: 'Breathe', artist: 'Seeb Neev', playing: false, progress: 0},
    //         {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0},
    //         {title: 'Lifespan', artist: 'Vaults', playing: false, progress: 0},
    //         {title: 'Stay High', artist: 'Tove Lo', playing: false, progress: 0},
    //         {title: 'Lean On', artist: 'Major Lazer', playing: false, progress: 0},
    //         {title: 'They Say', artist: 'Kilter', playing: false, progress: 0}
    //     ];
 
    //     this.currentTrack = this.tracks[0];
 
    // }
 
    // playTrack(track){
 
    //     // First stop any currently playing tracks
 
    //     for(let checkTrack of this.tracks){
 
    //         if(checkTrack.playing){
    //             this.pauseTrack(checkTrack);
    //         }
 
    //     }
 
    //     track.playing = true;
    //     this.currentTrack = track;
    //     // Simulate track playing
    //     this.progressInterval = setInterval(() => {
    //         track.progress < 100 ? track.progress++ : track.progress = 0;
    //     }, 1000);
    // }
 
    // pauseTrack(track){
    //     track.playing = false;
    //     clearInterval(this.progressInterval);
    // }
 
    // nextTrack(){
    //     let index = this.tracks.indexOf(this.currentTrack);
    //     index >= this.tracks.length - 1 ? index = 0 : index++;
    //     this.playTrack(this.tracks[index]);
    // }
 
    // prevTrack(){
    //     let index = this.tracks.indexOf(this.currentTrack);
    //     index > 0 ? index-- : index = this.tracks.length - 1;
    //     this.playTrack(this.tracks[index]);
    // }
 
}