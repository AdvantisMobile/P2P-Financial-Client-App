import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mapping-account',
  templateUrl: './mapping-account.page.html',
  styleUrls: ['./mapping-account.page.scss'],
})
export class MappingAccountPage implements OnInit {
  tab: string = "assets";
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.back();
  }
  accountDetails(){
    
  }
}
