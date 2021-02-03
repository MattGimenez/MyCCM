import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Routes, RouterModule, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Stream',
      url: '/stream'
    },
    {
      title: 'Contacto',
      url: '/contacto'
    },
    {
      title: 'Ultimas Noticias',
      url: '/noticias'
    }
  ];

  selectedPath = '';

  constructor(private menu: MenuController, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }
  ngOnInit() {
  }

}
