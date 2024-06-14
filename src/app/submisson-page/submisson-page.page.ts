import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-submisson-page',
  templateUrl: './submisson-page.page.html',
  styleUrls: ['./submisson-page.page.scss'],
})
export class SubmissonPagePage implements OnInit {

  constructor(private alertController: AlertController,private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  async submitAnswers() {
    const alert = await this.alertController.create({
      header: 'Submission',
      message: 'Your answers have been submitted!',
      buttons: [{
        text: 'OK',
        handler: async () => {
          await this.clearStorageAndNavigate();
        }
      }]
    });

    await alert.present();
  }

  private async clearStorageAndNavigate() {
    try {
      // Clear the selected options from storage
      await this.storage.remove('tab1Option');
      await this.storage.remove('tab2Option');
      await this.storage.remove('tab3Option');

      // Verify removal
      const tab1Option = await this.storage.get('tab1Option');
      const tab2Option = await this.storage.get('tab2Option');
      const tab3Option = await this.storage.get('tab3Option');

      if (tab1Option === null && tab2Option === null && tab3Option === null) {
        console.log('All options successfully removed');
        // Reset the last visited tab to tab1
        await this.storage.set('lastTab', 'tab1');

        // Redirect to the first tab
        this.router.navigateByUrl('/tabs/tab1');
      } else {
        console.error('Failed to remove all options');
      }
    } catch (error) {
      console.error('Error clearing selected options:', error);
      // Handle error as needed
    }
  }
}
