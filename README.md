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

### Project Tasks list:

Duration: 7 hours

1 setup react framework (TS) (done)

2 build web component (done)

3 unit test (yet to be done)

4 add redux and redux persist (done)

5 validation (done most of them as they are not fully defined in the requirement. date of birth validation is not covered)

6 page navigation and local state/ global state management (done)

7 style (done)

8 bit.dev to manage web component and publish to npm as component library to reuse (yet to be done)

9 nestjs api (server side receive form data request, yet to do but this is not required)

10 tested on Chrome and IE (done)

11 E2E auto test (yet to be done)

Demo website

https://6crmy.csb.app/


Things yet to be done: 

don't have time to include a datetime picker component and its icon next to date of birth. will use react datepicker from npm later

don't have time to add unit tests. should add those tests for components and logic checking for Quality control.


The result is output at console.dir when submit. To check the result, please open developer tool in chrome and see console message.


Architecture:
Bit.dev -> Npm to manage web components -> claim form app

Statemanagement

Form values are persist, when page reload, it will be loaded from local storage. Storage will be cleared only when form is submitted or user clear browser cache.

Form fields state including touched and error are manage by seperate storage which is not cached. Refresh browser will be cleared.

Local state to keep form submitted status.
