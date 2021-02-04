import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  providers: [ApiService]
})
export class NoticiasPage implements OnInit {

  studentsData: any;  
  variable: string;

  constructor(public apiService: ApiService, private iab: InAppBrowser) {
    this.studentsData = [];
  }

  ngOnInit() {
    // this.getAllStudents();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllStudents();
  }

  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      // console.log (response);
      this.studentsData = response;
      console.log (this.studentsData);
    })
  }

  openPage(){
    this.iab.create("https://www.ccm.com.py/ultimas-noticias/")
  }

}
