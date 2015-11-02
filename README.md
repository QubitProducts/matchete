# matchete
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Matchete is a super simple case-insensitive JavaScript string matcher that can be used to work out if a value fully or partially contains the words in a search string.


### Installation

```
npm install --save matchete
```


### Usage

```
var matchete = require('matchete')
matchete('foobar baz boz', 'foo') // true - partial match of the word
matchete('foobar baz boz', 'foobar') // true - full match of the word
matchete('foobar baz boz', 'foo ba') // true - partial match of multiple words
matchete('foobar baz boz', 'foO bA BO') // true - case-insensitive match
matchete('foobar baz boz', 'foo boz ba') // false - incorrect search word order
```


### Testing

```
make bootstrap test
```