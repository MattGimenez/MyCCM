import { Component } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  audio: MediaObject;

  constructor(public media: Media) {
    
  }

  play(){
    console.log("Tab2 play");
    this.audio = this.media.create('C:/Users/matgi/Documents/MyCCM/src/asset/audio/AUD-20200715-WA0045.mp3');
    this.audio.play();
    this.audio.setVolume(0.8);
  }

}
