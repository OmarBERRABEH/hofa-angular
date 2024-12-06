import {
  createActionGroup,
  createFeature,
  createReducer,
  emptyProps,
  on,
  props,
} from '@ngrx/store';
import { DashboardData } from '../models/dashboard.model';

interface State {
  data: DashboardData | null;
  loading: boolean;
  error: unknown;
}

const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

export const DashboardActions = createActionGroup({
  source: 'dashboard  | Dashboard',
  events: {
    Load: emptyProps(),
    'Load Success': props<{ data: DashboardData }>(),
    'Load Failure': props<{ error: unknown }>(),
  },
});

export const DashboardFeature = createFeature({
  name: 'Dashboard',
  reducer: createReducer(
    initialState,
    on(DashboardActions.load, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(DashboardActions.loadSuccess, (state, { data }) => ({
      ...state,
      data,
      loading: false,
    })),
    on(DashboardActions.loadFailure, (state, { error }) => ({
      ...state,
      error,
      loading: false,
    })),
  ),
});
