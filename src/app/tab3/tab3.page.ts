import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  selectedOption: string | undefined;

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.selectedOption = await this.storageService.getOption('tab3Option');
  }

  async ionViewWillEnter() {
    this.selectedOption = await this.storageService.getOption('tab3Option');
  }

  async onOptionSelected(option: string) {
    await this.storageService.setOption('tab3Option', option);
    this.selectedOption = option; // Update the selected option
    console.log('Selected option for tab3:', option);
  }

}
