# React Example

## Project:

A simple cat react app.

- Swiping left means you don't like the cat photo.

- Swiping Right means you like it! Meow.

In order to run this demo:

1. make sure cors is enabled locally so we can hit the public free api, via a chrome plugin or chrome dev tools.
2. So far, swiping only tested via mobile view with inspector.


We are using catapi (http://thecatapi.com/)


![example](http://example.com)

## Decisions:

- Tried to make this as lightweight as possible


## Further work:

- Pagination/caching, right now we just hit the api one at a time, we can easily grab many more at a time

- Suport desktop mode, either show buttons or get swiping to work on desktop

- Better loading animations/transitionsd

- Better animations for swiping images

- Better style overall

- More unit/integration tests

## Setup:

Install dependencies:

```
yarn
```

To run the app:

```
yarn start
```

To run the tests:

```
yarn test
```
