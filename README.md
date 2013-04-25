# jQuery Array utilities 

Use the set operations UNION, INTERSECT, EXCEPT, known from SQL, to extract data from arrays.
DISTINCT is also available to extract an array with distinct values. 

This plugin requires jQuery 1.2+

## Examples:

'''bash
$.distinct([1, 2, 2, 3])
'''
gives the result [1,2,3]

'''bash
$.union([1, 2, 2, 3], [2, 3, 4, 5, 5])
'''
gives the result [1,2,3,4,5]

'''bash
$.instersect([1, 2, 2, 3], [2, 3, 4, 5, 5])
'''
gives the result [2,3]

'''bash
$.except([1, 2, 2, 3], [2, 3, 4, 5, 5])
'''
gives the result [1]




