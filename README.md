# jQuery Array utilities 

Use the set operations UNION, INTERSECT, EXCEPT, known from SQL, to extract data from arrays.
DISTINCT is also available to extract an array with distinct values.

This plugin has been heavily tested. There are several automated tests for each method in this plugin.

This plugin requires jQuery 1.2+

## Examples:

### Distinct
```javascript
$.distinct([1, 2, 2, 3])
```
gives the result [1,2,3]

### Union
```javascript
$.union([1, 2, 2, 3], [2, 3, 4, 5, 5])
```
gives the result [1,2,3,4,5]

### Instersect
```javascript
$.instersect([1, 2, 2, 3], [2, 3, 4, 5, 5])
```
gives the result [2,3]

### Except
```javascript
$.except([1, 2, 2, 3], [2, 3, 4, 5, 5])
```
gives the result [1]

## Usage:
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/KristianAbrahamsen/jquery.arrayUtilities/master/src/jquery.arrayUtilities.min.js
[max]: https://raw.github.com/KristianAbrahamsen/jquery.arrayUtilities/master/src/jquery.arrayUtilities.js

In your web page:

```html
<script src="http://code.jquery.com/jquery.min.js"></script>
<script src="yourFolder/jquery.arrayUtilities.min.js"></script>
```

## API Reference

### Methods

  Option                                                                               | Role        | Description
---------------------------------------------------------------------------------------|-------------|-------------
 distinct(array)	                                                                   | Method      | Returns a new array with disctinct elements based on the array input.
 union(array1, array2, ..., arrayN)	                                                   | Method      | Returns a new array with disctinct elements based on combining all input arrays
 instersect(array1, array2, ..., arrayN)                                               | Method      | Returns a new array with disctinct elements which are present in all input arrays
 except(array1, array2, ..., arrayN)                                                   | Method      | Returns a new array with disctinct elements which are present in array1 but not in the other input arrays




