import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardActions, DashboardFeature } from './dashboard.state';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacade {
  private store = inject(Store);
  selectData = this.store.selectSignal(DashboardFeature.selectData);
  selectLoading = this.store.selectSignal(DashboardFeature.selectLoading);
  selectError = this.store.selectSignal(DashboardFeature.selectError);

  load() {
    this.store.dispatch(DashboardActions.load());
  }
}
