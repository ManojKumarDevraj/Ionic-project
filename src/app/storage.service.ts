import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  async setOption(optionName: string, value: any): Promise<void> {
    await this.storage.set(optionName, value);
  }

  async getOption(optionName: string): Promise<any> {
    return await this.storage.get(optionName);
  }

  async removeOption(optionName: string): Promise<void> {
    await this.storage.remove(optionName);
  }
}
