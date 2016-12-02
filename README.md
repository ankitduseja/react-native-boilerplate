# React Native Boilerplate

A React Native boilerplate with Redux, Sagas, Reselect & more. The goal is to maintain an up-to-date, efficient, production-level yet easy-to-learn boilerplate to get started with cross platform apps with react-native quickly, while also keeping it simple for new developers to start learning and join on this stack.

## Packages Included
* react
* react-native
* react-native-router-flux
* react-redux
* redux
* [redux-persist](https://github.com/rt2zz/redux-persist) - helps in persisting redux store data across sessions.
* [redux-persist-transform-immutable](https://github.com/rt2zz/redux-persist-transform-immutable) - Add immutable sub-reducer support to redux-persist.
* [redux-saga](https://github.com/yelouafi/redux-saga) - To make asynchronous actions easier in react/redux.
* [reselect](https://github.com/reactjs/reselect) - Selector Library for redux.
* [immutable](https://facebook.github.io/immutable-js/) - Immutable data cannot be changed once created, great debugging experience.
* (more to be added soon)

## How to get started?
To install, clone this repository: `git clone https://github.com/ankitduseja/react-native-boilerplate.git`

Then run `npm install` to install.

Finally, To start the packager: `npm start`.

To run the android app: `react-native run-android`

To the start the IOS app: `react-native run-ios`

## TODO:
* Add Integration for React Web using React Native.
* Add more examples. Make better UI of existing one's.
* Write testing script (using enzyme, mocha).
* Make Redux store persist across sessions or provide a way to persist some data of store.
* Setup scripts to create new components/containers and clean the pre-included examples to begin a clean project.
* Create tutorials explaining the project architecture.

## Contribute
If you would like to add something to this boilerplate, create an issue before sending a pull request. This repository is currently under active development and things will change frequently.

This repository is inspired based on the architecture of  [react-boilerplate](https://github.com/mxstbr/react-boilerplate) (for web).
