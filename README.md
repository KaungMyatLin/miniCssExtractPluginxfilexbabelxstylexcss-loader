## Building and running on localhost
First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

```sh
node dist/bundle.js
```

## With a loader, you can translate another type of file to a format that webpack understands and can work with.

## When you use two loaders in webpack then it takes the output of the first and sends it as input to the second. In our example it takes the CSS file and runs it through css-loader then it takes the output and runs it as input to the style-loader.

## css-loader reads the CSS from the CSS file and returns the CSS with the import and url(...) resolved correctly. Let’s say you have a url in the CSS referencing another resource, like an image: background: url("topbanner.svg") #00d no-repeat fixed;.

## https://blog.jakoblind.no/css-modules-webpack/
## https://css-tricks.com/css-modules-part-2-getting-started/