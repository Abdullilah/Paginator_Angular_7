import {AppState} from '../app.state';
import {ActionTypes, PlanetsActions} from '../actions/planet.actions';

export const initialState: AppState = {
  planets: [''],
  paginator: {
    length: 10,
    pageIndex: 1,
    pageSize: 5,
    previousPageIndex: 0
  },
  filterChartsLength: 1
};

export function planetsReducer(state = initialState, action: PlanetsActions) {

  switch (action.type) {
    case ActionTypes.AddPlanet:
      return {
        ...state,
        planets: [...state.planets, action.payload]
      };

    case ActionTypes.UpdatePaginatorInfo:
      return {
        ...state,
        paginator: action.payload
      };

    case ActionTypes.UpdateFilterChartsLength:
      return {
        ...state,
        filterChartsLength: action.payload
      };

    default:
      return state;
  }
}
