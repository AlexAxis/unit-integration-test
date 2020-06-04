This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


----------------------------------

# Commands used:

### Create our application:
npx create-react-app unit-integration-test<br />
cd unit-integration-test

### Add packages
yarn add -D enzyme enzyme-adapter-react-16 jest jest-enzyme

### Git commands
git status<br />
git add *<br />
git commit -m "Basic config of our testing"<br />
git remote add origin https://github.com/AlexAxis/unit-integration-test.git<br />
git push -u origin master   

### Git branch
git checkout -b testingComponents<br />
git status

### Add SCSS
yarn add node-sass

### Git commands
git add *<br />
git add .env<br />
git reset HEAD yarn.lock<br />
git commit -m "Initial commit of my components without tests"

### Test commands
yarn run test<br />

### Git commands to push branch
git add *<br />
git commit -m "Headline component with tests"<br />
git status<br />
git push origin testingComponents

### Add prop-types package
npm install --save prop-types

### Add check-prop-types (dev environment -> for the tests)
npm install --save-dev check-prop-types

### Git commands after prop-types
git add *<br />
git reset HEAD package-lock.json<br />
git commit -m "Adding PropTypes to our headline component"<br />
git push origin testingComponents

### Add redux
npm i redux react-redux redux-thunk

### Add axios and moxios(mock the axios)
npm install axios<br />
npm install --save-dev moxios

### ERROR bug (cannot find module node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault')
yarn add -D moxios (di this and got the error)<br />
npm add @babel/runtime