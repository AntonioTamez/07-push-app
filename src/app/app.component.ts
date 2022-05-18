import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import OneSignal from 'onesignal-cordova-plugin'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
     // this.pushservice.configuracionInicial();
      this.OneSignalInit();
      //this.pushservice.configuracionOneSignal();
    });
  }

  OneSignalInit(): void {
    // Uncomment to set OneSignal device logging to VERBOSE  
    // OneSignal.setLogLevel(6, 0);

    // NOTE: Update the setAppId value below with your OneSignal AppId.
    OneSignal.setAppId("4834079a-fed3-42c2-b5d5-da6efdc7a9f2");
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    // iOS - Prompts the user for notification permissions.
    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });
  }


}
