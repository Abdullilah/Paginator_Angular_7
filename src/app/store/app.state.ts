import {Paginator} from '../models/paginator';

export interface AppState {
  readonly planets: string[];
  readonly paginator: Paginator;
  readonly filterChartsLength: number;
}
