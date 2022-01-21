import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  async set(key: string, value: any) {
    await Storage.set({ key: key, value: JSON.stringify(value) });
  }

  async get(key: string) {
    // Get the value under "my-key"
    const { value } = await Storage.get({ key: key });
    return JSON.parse(value);
  }

  async remove(key: string) {
    await Storage.remove({ key: key });
  }
}
