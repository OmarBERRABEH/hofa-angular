import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

class MemoryStorage implements Storage {
  private storage = new Map<string, string>();
  length = 0;

  // Retrieves a value by key
  getItem(key: string): string | null {
    return this.storage.get(key) || null;
  }

  // Sets a value for a key
  setItem(key: string, value: string): void {
    if (!this.getItem(key)) {
      this.length++;
    }
    this.storage.set(key, value);
  }

  // Removes a value by key
  removeItem(key: string): void {
    if (this.getItem(key)) {
      this.length--;
    }
    this.storage.delete(key);
  }

  // Clears all values
  clear(): void {
    this.length = 0;
    this.storage.clear();
  }

  key(index: number): string | null {
    const keys = Object.keys(this.storage);
    return keys[index] || null;
  }
}

@Injectable({
  providedIn: 'root',
})
export class StorageAdapter {
  private storage!: Storage;

  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      this.storage = localStorage;
    } else {
      this.storage = new MemoryStorage();
    }
  }

  setItem(key: string, value: unknown): void {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to storage', error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const item = this.storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from storage', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error('Error removing from storage', error);
    }
  }

  clear(): void {
    try {
      this.storage.clear();
    } catch (error) {
      console.error('Error clearing storage', error);
    }
  }
}
