import homeSaga from '../HomePage/sagas';

export default function* appSaga() {
  yield [
    homeSaga(),
  ]
}
