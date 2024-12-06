import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardData } from '../models/dashboard.model';
import { ApiAdapter } from '@/infrastructure/adapters/api/api.adapter';

@Injectable({
  providedIn: 'root',
})
export class DashboardApi {
  private apiAdapter = inject(ApiAdapter);

  getDashboardData(): Observable<DashboardData> {
    return this.apiAdapter.get<DashboardData>('/dashboard');
  }
}
