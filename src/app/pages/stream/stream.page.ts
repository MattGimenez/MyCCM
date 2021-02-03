import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.page.html',
  styleUrls: ['./stream.page.scss'],
})

export class StreamPage implements OnInit {

  audo = document.getElementsByTagName("audio");
  playPaue = document.getElementById("play");
  
  @ViewChild('audio', { static: false }) audio: ElementRef;
  @ViewChild('play', { static: false }) playPause: ElementRef;

  constructor() {
  }

  buttonChange() {
    console.log ("Element: " + this.playPause);
    if (this.audio.nativeElement.paused || this.audio.nativeElement.ended) {
      this.playPause.nativeElement.querySelector(".pause-btn").classList.toggle("hide");
      this.playPause.nativeElement.querySelector(".play-btn").classList.toggle("hide");
      this.audio.nativeElement.play();
    } else {
      this.audio.nativeElement.pause();
      this.playPause.nativeElement.querySelector(".pause-btn").classList.toggle("hide");
      this.playPause.nativeElement.querySelector(".play-btn").classList.toggle("hide");
    }
}

ngOnInit() {
}

}
