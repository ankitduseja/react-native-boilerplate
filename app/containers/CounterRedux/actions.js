import * as C from './constants';

/**
 * Initializes the counter
 *
 * @param {id} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function counterInit() {
  return {
    type: C.COUNTER_INIT,
  };
}


/**
 * Adds a counter
 *
 * @param {id} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function counterAdd() {
  console.log('Adding..');
  return {
    type: C.COUNTER_ADD,
  };
}

/**
 * Removes a counter
 *
 * @param {id} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function counterRemove(id) {
  return {
    type: C.COUNTER_REMOVE,
    id,
  };
}

/**
 * Increments a counter
 *
 * @param {id} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function counterIncrement(id) {
  return {
    type: C.COUNTER_INCREMENT,
    id,
  };
}


/**
 * Decrements a counter
 *
 * @param {id} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function counterDecrement(id) {
  return {
    type: C.COUNTER_DECREMENT,
    id,
  };
}
