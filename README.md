# RRM

Template for Create React App with [Redux](https://redux.js.org/) and [Material-UI](https://material-ui.com/).

## How to use

```bash
npx create-react-app my-app --template rrm
cd my-app
yarn start
```

## Features

- Bootstrapped with [Create React App](https://create-react-app.dev/).
- State management with [Redux](https://redux.js.org/).
- Google’s [Material Design](https://material.io/) through [Material-UI](https://material-ui.com/).

## Structure

### `README.md`

Refer to this documentation for information on available scripts and links to some other useful documentation.

### `public/`

The `public` folder, like most of the other code, is copied straight from the base template of [Create React App](https://create-react-app.dev/). So do check out their [docs](https://create-react-app.dev/docs/getting-started).

### `src/`

The `src` folder contains our entry point and other JavaScript files. The following files are also copied straight from the base template of [Create React App](https://create-react-app.dev/). So do check out their [docs](https://create-react-app.dev/docs/getting-started).

- `App.test.js`
- `index.js`
- `logo.svg`
- `serviceWorker.js`
- `setupTests.js`

#### `App.js`

This file contains the root component of the react app. It has the Redux store provider and Material-UI paper provider already set up. A React Router is also set up with just one route. You can modify it or add more routes.

All styles are added to the app using the `makeStyles` feature of Material-UI. The `makeStyles` function generates class names we can add to our DOM to add the styles. In `App.js` two sets of classes are used - `classes` and `localClasses`. `classes` is geneIt cated from a global set of styles that can be found in `theme.js`. `localClasses` is generated from a set of styles defined in `App.js`, to be used inside `App.js`.

#### `index.css`

It contains some global styles.

#### `App.css`

It contains some styles to be applied to the App component.

#### `theme.js`

It contains some styles that can be used in multiple components. So you can add some styles that you'd like to reuse in multiple components over here.

#### `store.js`

This is the redux store script. Learn more from the [React Redux docs](https://react-redux.js.org/introduction/basic-tutorial).

#### `reducers/`

This folder contains all the redux reducers. For example, the reducer for authentication is in `authReducer.js`.

Here, the simple approach of a single UPDATE action type is used for all the actions. It simply replaces the state's properties with the contents of the action payload. This is pretty much the most common action used. More actions can be added to the switch block.

#### `actions/`

This folder contains all the redux actions. For example, the actions for authentication is in `authActions.js`. All redux action types are declared in `types.js`.
