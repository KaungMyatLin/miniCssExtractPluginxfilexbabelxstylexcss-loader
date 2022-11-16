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

##  .sass and .scss files are compile to regular css file. 
##  Css file then loaded as linkhref onto html, therefore it is pre-processor.
##  All css files can be bundled as one with webpack plugin "postcss-import".
##  That one file can be written in future syntaxes, drafted stage, with webpack plugin "postcss-preset-env".
##  That one file and all css in it can be minified with webpack plugin "cssnano".
##  That one file can either be loaded as linkhref onto html or an external regular css file with webpack plugin MiniCssExtractPlugin.