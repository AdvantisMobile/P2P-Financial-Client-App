import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {}
  
  onOk(){
    console.log('OK');
    this.modalCtrl.dismiss(null, 'ok'); 
 
  }
  onCancel(){
    console.log('Cancel');
    this.modalCtrl.dismiss(null, 'cancel'); 
    
  }

}
