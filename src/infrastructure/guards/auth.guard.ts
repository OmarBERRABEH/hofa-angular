import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageAdapter } from '../adapters/storage/storage.adapter';

export function AuthGuard(): CanActivateFn {
  const router = inject(Router);
  const storage = inject(StorageAdapter);
  return () => {
    const token = storage.getItem<string>('auth_token');

    if (!token) {
      router.navigate(['/login']);
      return false;
    }

    return true;
  };
}
