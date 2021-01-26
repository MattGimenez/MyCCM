import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private nativeAudio: NativeAudio) {
  }

  play(){
    console.log("Tab3 play");
    this.nativeAudio.preloadComplex('uniqueId1', './assets/music.mp3', 1,1,0);
    this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
  }

}
