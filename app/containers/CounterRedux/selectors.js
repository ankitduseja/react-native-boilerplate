import { createSelector } from 'reselect';

export const counterSelector = (state) => state.counterReducer.get('counters').toJS();

export const counter2Selector = createSelector(
  [ counterSelector ],
  (count) => {return count}
)
