import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  audio = document.getElementsByTagName("audio");

  constructor() {}

  play () {
    this.audio[0].play();
  }

  stop(){
    this.audio[0].pause();
  }
  
}
