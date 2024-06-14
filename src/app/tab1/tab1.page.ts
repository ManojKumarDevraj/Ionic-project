import { Component } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selectedOption: string | undefined;


  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.selectedOption = await this.storageService.getOption('tab1Option');
  }

  async ionViewWillEnter() {
    this.selectedOption = await this.storageService.getOption('tab1Option');
  }

  async onOptionSelected(option: string) {
    await this.storageService.setOption('tab1Option', option);
    this.selectedOption = option; // Update the selected option
    console.log('Selected option for tab1:', option);
  } 

}
