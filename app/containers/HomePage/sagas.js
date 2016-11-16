export function* helloSaga() {
  console.log('Hello from Saga!');
}


export default function* homeSaga() {
  yield [
    helloSaga(),
  ]
}
