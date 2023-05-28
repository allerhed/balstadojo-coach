import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// custom import
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Network } from '@capacitor/network';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {

  networkStatus: any;
  //networkListener: PluginListenerHandle | undefined;

  constructor(private iab: InAppBrowser, public alertController: AlertController) {

    this.openInAppBrowser();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Warning',
      subHeader: 'No network detected',
      message: 'This app requires a network to run.',
      buttons: ['OK']
    });

    await alert.present();
  }

  // Network check on change
  ngOnInit() {
       // Network check 
      this.checkNetworkStatus();
    
  }

  async checkNetworkStatus() {
    try {
      const status = await Network.getStatus();
      console.log('Connection status:', status);
      if(status.connected == false){
        this.presentAlert();
        }
    } catch (error) {
      console.error('Error checking network status:', error);
    }
  }

  

  
  openInAppBrowser() {  
    //admin /staff#/attendance
    //member /grupptraning
    const browser = this.iab.create('https://members.balstadojo.com/staff#/attendance', 
                                    '_blank',
                                    {
                                      location: 'no',
                                      toolbar: 'no',
                                      }
                                      );
      };





}
function showAlert() {
  throw new Error('Function not implemented.');
}

