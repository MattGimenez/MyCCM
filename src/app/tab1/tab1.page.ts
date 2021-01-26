import { InvokeFunctionExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { Howl, Howler, Track } from 'howler';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  howlaudio: Howler= './assets/audio/AUD-20200715-WA0045.mp3';

  constructor() {}

  play () {
    console.log("Tab1 play");
    this.howlaudio.play();
  }
  
}
