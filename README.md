## Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Zakiya Alfughi as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zakiyaalfughi/lotide`

**Require it:**

`const _ = require('@zakiyaalfughi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Function returns the first item in the array. The head function should not return the first element as an array. It should simply return the element itself.
* `tail(array)`: Function returns the "tail" of an array, (i.e. everything except for the first item (head) of the provided array).
* `eqArrays (array1, array2)`: Function takes in two arrays and returns true or false, based on a perfect match.
* `assertArraysEqual(array1, array2)`: Function will take in two arrays and console.log an appropriate message to the console.
* `middle(array)`: function takes in an array and return the middle-most element(s) of the given array.
* `letterPositions(array)`: Function returns all the indices (zero-based positions) in the string where each character is found.
* `countLetters(string)`: Function takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: Function takes an array and an object and returns a proper report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.
allItems: an array of strings that we need to look through
itemsToCount: an object specifying what to count
* `countOnly(allItems, itemsToCount)`:map function will take in two arguments:
* `map(array, callback)`: Function returns a new array based on the results of the callback function.
* `without(source, itemsToRemove)`: Function takes a primary array and a test array removes items from the primary array if they match the test array and then returns a new array with only the unique items from the primary array.
* `takeUntil(array, callback)`: Function takes an array and a function returns everything in the array up until the function condition.

