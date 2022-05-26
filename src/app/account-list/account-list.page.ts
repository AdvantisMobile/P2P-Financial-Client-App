import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../services/API/DataService';
import { AccountModalPage } from '../Modal/account-modal/account-modal.page'
import { ProviderPresenter } from '../services/presenter/ProviderPresenter';
import { LoginPresenter } from '../services/presenter/LoginPresenter';
import { YodleePresenter } from '../services/presenter/YodleePresenter';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.page.html',
  styleUrls: ['./account-list.page.scss'],
})
export class AccountListPage implements OnInit {
  accounts: any;
  accountName:any;

  liveCount: any;
  manualCount: any;
  liveBalance:any;
  manualBalance:any;

  showLive:boolean = true;
  showManual:boolean = true;
  userId:any;

  liveAccounts: any = [];
  liveProviders:any = [];

  manualAccounts: any = [];
  manualProviders: any = [];
  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    public _dataService: DataService,
    public _providerPresenter: ProviderPresenter,
    public _yodleePresenter: YodleePresenter,
    public _yodleeAccount: LoginPresenter
  ) { 
    this.accountName = "ANZ";
   
    this.liveBalance = 860908.88;
    this.manualBalance = 2200000.00;
  }

  ngOnInit() {
    let user = localStorage.getItem('user');
    let userData = JSON.parse(user);
    this.userId = userData.user.id;
    
    let dafdsfas = localStorage.getItem('accounts');
    console.log('asdfasdfasdf', JSON.parse(dafdsfas));
    this.liveProviders = JSON.parse(dafdsfas).account;

    
    this.getProviders();
  }
  async getProviders(){
 
    console.log('User ID', this.userId);
    const res = await this._providerPresenter.getProvider(this.userId);
    console.log('Providers', res);
    if(res){
      this.liveProviders = res['yodleeProviders'];
      this.manualProviders = res['manualAccounts'];
      this.manualCount = this.manualProviders.length;
      // let resToken:any = await this._yodleePresenter.yodleeGetToken();
      // console.log('Token Data', resToken);
      //   let token = resToken?.token?.accessToken;
      // for(let i=0; i < this.liveProviders.length; i++){
      //   let item = this.liveProviders[i];
      //   console.log('Provide Data', item);
      //   const resD = await this._yodleePresenter.yodleeGetDetail(item, token);
      //   console.log('provide details', resD);
      // }
      this.sort();
    }
  }

  groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  sort(){
    let arrayFinal = [];
    let sortArray = this.groupArrayOfObjects(this.liveProviders, "providerName");
    for (const [key, value] of Object.entries(sortArray)){
        let item = {
          name: key,
          accounts: value,
        };
        arrayFinal.push(item);
    }
    console.log('arrayFinal', arrayFinal);
    for(let i=0;i<arrayFinal.length;i++){
      let item = arrayFinal[i];
      let bal;
      // for(let j=0;j<item.accounts.length;j++){
      //   let a = item.accounts[j];
      //   bal  = bal + a.balance.amount;
      // }
      let account = {
        name: item.name,
        count: item.accounts.length,
        accounts: item.accounts,
        show: true,
        amount: 270.00
        // amount: bal
      }
      this.liveAccounts.push(account);
    }
    console.log('liveAccounts', this.liveAccounts);
  }
  back(){
    this.navCtrl.back();
  }
  //--Live Part--
  refresh(){

  }
  delete(){

  }
  showDetails(item:any){
    item.show = !item.show;
  }
 async accountDetailsL(item:any){
    const modalOpt = {
      component: AccountModalPage,
      cssClass:'detail-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        model: item,
        type: 'live'
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('ACCOUNT DETAIL MODAL RETURN DATA----> ADD-ACCOUNT.TS',data)
    });
    await modal.present();
  }
  //--Manual Part--
  showManualItems(){
    this.showManual = !this.showManual;
  }
  deleteItem(){

  }
  async accountDetailsM(mAccount:any){
    const modalOpt = {
      component: AccountModalPage,
      cssClass:'detail-modal',
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        model: mAccount,
        type: 'manual'
      }
    }
    let modal = await this.modalCtrl.create(modalOpt);
    modal.onDidDismiss().then((data) => {
      console.log('ACCOUNT DETAIL MODAL RETURN DATA----> ADD-ACCOUNT.TS',data)
    });
    await modal.present();
  }

}
