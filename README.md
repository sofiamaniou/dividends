# Dividends

## Summary

A React application that shows the dividends for a selected stock id and recalculates the dividend yield if user overwrites the dividend amount.

The project is built on top of React library using Vite framework and TypeScript.
The following choices were made based on the current requirements:

- UI: Creating custom UI components using HTML, CSS and TypeScript. If the components were not simple, the usage of a UI library would be beneficial.
- State: Relying on React hooks for managing local state. If the state was more complicated, a separate state management library like Redux would be required.
- Error handling: Wrapping root component with error boundary to gracefully handle an error without crashing the application. 
- Tests: Adding unit and integrations UI tests using Jest and React Testing Library. Skipping E2E tests since they are more time consuming to write and setup. However, it would be good to have some E2E tests for the happy paths of the main user scenarios.
- Localization: Skipping localization but it is a must-have for going enterprise.
- Performance: Carefully designed the components to ensure that each component is responsible to only manage changes of its immediate fields, avoiding unnecessary re-renders. Used [React-profiler](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) to verify the React components performance.

## Development

### Prerequisites

1. Install [Node **v16.x**](https://nodejs.org/dist/latest-v16.x/) using npm.
2. Open terminal window and setup global NPM package for TypeScript:

  `npm install typescript -g`

3. Install the project dependencies.

  `yarn install`

### Build

  `yarn build` to build the project.

### Run

  `yarn preview` to run the application.

Once the application is running, open browser on "http://127.0.0.1:4173".

### Test

  `yarn test` to run the unit tests.
