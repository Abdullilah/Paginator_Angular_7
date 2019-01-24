import {Action} from '@ngrx/store';
import {Paginator} from '../../models/paginator';

export enum ActionTypes {
  AddPlanet = '[PlantList Component] Add New Planet',
  UpdatePaginatorInfo = '[PlantList Component] Update Paginator Data',
  UpdateFilterChartsLength = '[PlantList Component] Update Filter Charts Length',
}

export class AddPlanet implements Action {
  readonly type = ActionTypes.AddPlanet;

  constructor(public payload: string) {
  }
}

export class UpdatePaginatorInfo implements Action {
  readonly type = ActionTypes.UpdatePaginatorInfo;

  constructor(public payload: Paginator) {
  }
}

export class UpdateFilterChartsLength implements Action {
  readonly type = ActionTypes.UpdateFilterChartsLength;

  constructor(public payload: number) {
  }
}

export type PlanetsActions = AddPlanet | UpdatePaginatorInfo | UpdateFilterChartsLength;
