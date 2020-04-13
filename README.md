# Rendering and executing script tag using ReactJs

Sample code from a create-react-app project.

```js
import React, { useEffect } from 'react';
import './App.css';

function App() {
  const danger = '<script>alert("Hello world!")</script>';

  useEffect(() => {
    const el = document.querySelector('.danger');
    el.appendChild(document.createRange().createContextualFragment(danger));
  }, []);

  return (
    <div className='App'>
      <h1>Render and execute script tag</h1>
      <div className='danger'></div>
    </div>
  );
}

export default App;
```

[![Edit trusting-dream-i9ozk](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/trusting-dream-i9ozk?fontsize=14&hidenavigation=1&theme=dark)

There may also be a library for that:

[dangerously-set-html-content](https://www.npmjs.com/package/dangerously-set-html-content)

> ```js
> import React from 'react'
> import InnerHTML from 'dangerously-set-html-content'
> 
> function Example {
> 
>   const html = `
>     <div>This wil be rendered</div>
>     <script>
>       alert('testing')
>     </script>
>   `
> 
>   return (
>     <InnerHTML html={html} />
>   )
> }
> ```
> 
> This will also work for scripts with the src attribute set it

Sharing good article for more information:
[Render dangerous content with React](https://dev.to/christo_pr/render-dangerous-content-with-react-2j7j)

> ### Render the danger
> 
> Now what happens when you want to use dangerouslySetInnerHTML but also need to execute any script tag that comes inside the html? That's against HTML5 specifications, but if we dig a little bit more on what innerHTML do to inject the html we can found something interesting:
> 
> The specified value is parsed as HTML or XML (based on the document type), resulting in a DocumentFragment object representing the new set of DOM nodes for the new elements.
> 
> This DocumentFragment is a lightweight version of the document, it can have child nodes, the main difference is that since is a fragment, is not actually a part of the active/main document.
> 
> We can create a DocumentFragment using the document.Range API.
>
> ```js
> import React, { useEffect, useRef } from 'react'
> 
> // InnerHTML component
> function InnerHTML(props) {
>   const { html } = props
>   const divRef = useRef(null)
> 
>   useEffect(() => {
>     const parsedHTML = document.createRange().createContextualFragment> (html)
>     divRef.current.appendChild(parsedHTML)
>   }, [])
> 
> 
>   return (
>     <div ref={divRef}></div>
>   )
> }
> 
> // Usage
> function App() {
>   const html = `
>     <h1>Fragment</h1>
>   `
> 
>   return (
>     <InnerHTML html={html} />
>   )
> }
> ```

[Reference on innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

---

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
