# jQuery Array utilities 

Use the set operations UNION, INTERSECT, EXCEPT, known from SQL, to extract data from arrays.
DISTINCT is also available to extract an array with distinct values. 

This plugin requires jQuery 1.2+

## Examples:

```javascript
$.distinct([1, 2, 2, 3])
```
gives the result [1,2,3]

```javascript
$.union([1, 2, 2, 3], [2, 3, 4, 5, 5])
```
gives the result [1,2,3,4,5]

```javascript
$.instersect([1, 2, 2, 3], [2, 3, 4, 5, 5])
```
gives the result [2,3]

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






