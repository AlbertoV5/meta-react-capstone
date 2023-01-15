# Capstone React Project

Meta Front-End Specialization in Coursera.

## TO-DO:

1. Make the NavBar adapt to mobile view
2. Improve Footer

## Deployment

Deployment: https://albertov5.github.io/meta-react-capstone

```shell
npm run deploy
```

Deployed to GitHub pages tutorial: https://github.com/gitname/react-gh-pages

Remember to add "basename" to BrowserRouter for React Router.

```js
<BrowserRouter basename={"meta-react-capstone"}>
```

## Development:

### Testing:

Change script on package.json.

```shell
react-scripts test --testURL http://localhost:3000/meta-react-capstone
```

### Dependencies:

1. Chakra UI
2. Yup
3. Formik
4. React Router Hash Link https://www.npmjs.com/package/react-router-hash-link