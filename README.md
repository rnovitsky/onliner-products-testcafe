# Onliner Products tests

## Description

Automated UI tests for Onliner products pages

## Getting Started

* Manual test cases are located in [Onliner_tests.txt file](Onliner_tests.txt)
* Framework is configured to run tests only in chrome ([configuration file](/config/.testcaferc.js))
* If `CI` environment variable is set the tests will run concurrently in headless mode

### Installing

```
npm i
```

### Executing tests

```
npm run test:chrome
```