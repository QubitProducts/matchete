# matchete [![Build Status](https://travis-ci.org/QubitProducts/matchete.svg)](https://travis-ci.org/QubitProducts/matchete)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Matchete is a super simple case-insensitive JavaScript string matcher that can be used to work out if a value fully or partially contains the words in a search string.


### Installation

```
npm install --save matchete
```


### API
Matchete accepts a source string, search string and an optional delimiter. The default delimiter is a single space.
```js
matchete(sourceString, searchString, [delimiter])
```

### Examples
```js
matchete('foobar baz boz', 'foo') // true - partial match of the word
matchete('foobar baz boz', 'foobar') // true - full match of the word
matchete('foobar baz boz', 'foo ba') // true - partial match of multiple words
matchete('foobar baz boz', 'foO bA BO') // true - case-insensitive match
matchete('foobar baz boz', 'foo boz ba') // false - incorrect search word order
matchete('foobar_baz_boz', 'fo_ba__boz', '_') // true - using _ as delimiter instead of space
```


### Testing

```
make bootstrap test
```