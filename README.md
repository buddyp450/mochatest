# mochatest

`npm install`
`npm run test`

Notice output is like

```
root before
  a test suite
test suite before
root beforeEach
test suite beforeEach
    √ passes a basic test case
```

When I would've expected

```
root before
root beforeEach
  a test suite
test suite before
test suite beforeEach
    √ passes a basic test case
```