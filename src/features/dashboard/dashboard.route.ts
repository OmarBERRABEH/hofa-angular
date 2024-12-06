import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { DashboardFeature } from './store/dashboard.state';
import { provideEffects } from '@ngrx/effects';
import * as DashboardEffects from './store/dashboard.effects';

const DashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
    providers: [
      provideState(DashboardFeature),
      provideEffects(DashboardEffects),
    ],
  },
];

export default DashboardRoutes;
