# Capstone React Project

**Meta Front-End Specialization in Coursera.**

This Web App aims to solve Little Lemon's Table Booking problem by providing an interactive Form that allows the user to enter data for making a table reservation.

Use the Nav Bar to go to the Booking route and enter mock data for making a reservation. Have fun!

## TO-DO:

1. Add more tests for navigation
2. Improve design and fonts
3. Add a temporary Login form

## Deployment

Deployment: https://albertov5.github.io/meta-react-capstone

```shell
npm run deploy
```

Deploy to GitHub pages tutorial: https://github.com/gitname/react-gh-pages

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