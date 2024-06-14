import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tabIndex = event.url.split('/').pop();
        this.storage.set('lastTab', tabIndex);
      }
    });
  }

}
