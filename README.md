# jQuery Array Utilities 

Use the set operations UNION, INTERSECT, EXCEPT, known from SQL, to extract data from arrays.
DISTINCT is also available to extract an array with distinct values. 

If you are familiar with with LINQ and .NET you may have used these methods on IEnumerable collections. 

This plugin has been heavily tested. There are several automated tests for each method in this plugin.

This plugin requires jQuery 1.2+

## Examples

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

## Usage
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

  Method                                                                               | Description
---------------------------------------------------------------------------------------|--------------------------
 distinct(array)	                                                                   | Returns a new array with disctinct elements based on the array input.
 union(array1, array2, ..., arrayN)	                                                   | Returns a new array with disctinct elements based on combining all input arrays
 instersect(array1, array2, ..., arrayN)                                               | Returns a new array with disctinct elements which are present in all input arrays
 except(array1, array2, ..., arrayN)                                                   | Returns a new array with disctinct elements which are present in array1 but not in the other input arrays

## License 

(The MIT License)

Copyright (c) 2013 Kristian Marheim Abrahamsen &lt;kristian.abrahamsen@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Release History
v0.0.1 - 25 April 2013 - First version of library code and documentation ready.
