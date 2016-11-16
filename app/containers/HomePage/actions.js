import {
  DEFAULT_ACTION,
} from './constants';

/**
 * Default Action
 *
 * @param  none
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
