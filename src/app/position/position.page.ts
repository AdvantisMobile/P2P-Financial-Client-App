import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-position',
  templateUrl: './position.page.html',
  styleUrls: ['./position.page.scss'],
})
export class PositionPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { 

  }

  ngOnInit() {
  }
  addAccount(){
    this.navCtrl.navigateForward('tabs/add-account');
  }
  addAList(){
    this.navCtrl.navigateForward('tabs/account-list');
  }
  onMapping(){
    this.navCtrl.navigateForward('tabs/mapping-account');
  }
  onTotal(){
    this.navCtrl.navigateForward('tabs/total');
  }
}
