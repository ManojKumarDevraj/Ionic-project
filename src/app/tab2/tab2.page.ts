import { Component } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  selectedOption: string | undefined;

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.selectedOption = await this.storageService.getOption('tab2Option');
  }

  async ionViewWillEnter() {
    this.selectedOption = await this.storageService.getOption('tab2Option');
  }

  async onOptionSelected(option: string) {
    await this.storageService.setOption('tab2Option', option);
    this.selectedOption = option; // Update the selected option
    console.log('Selected option for tab2:', option);
  }
}
