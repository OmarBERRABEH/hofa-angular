import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DashboardApi } from '../../../features/dashboard/api/dashboard.api';
import { DashboardActions } from './dashboard.state';

export const DashboardLoadEffect = createEffect(
  (actions$ = inject(Actions), dashboardApi = inject(DashboardApi)) => {
    return actions$.pipe(
      ofType(DashboardActions.load),
      mergeMap(() =>
        dashboardApi.getDashboardData().pipe(
          map((data) => DashboardActions.loadSuccess({ data })),
          catchError((error) => of(DashboardActions.loadFailure({ error }))),
        ),
      ),
    );
  },
  { functional: true },
);
