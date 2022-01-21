import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  // cached data
  private data: Map<string, any> = new Map();

  get(key: string): any {
    return this.data.get(key);
  }

  set(key: string, value: any): void {
    this.data.set(key, value);
  }
}
