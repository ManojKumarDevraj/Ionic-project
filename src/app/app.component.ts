import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private storage: Storage,private router: Router ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.storage.create();
    this.platform.ready().then(() => {
      this.checkLastTab();
    });
  }

  async checkLastTab() {
    const lastTab = await this.storage.get('lastTab');
    if (lastTab) {
      this.router.navigateByUrl(`/tabs/${lastTab}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1`);
    }
  }
}
