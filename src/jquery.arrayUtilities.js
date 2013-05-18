/********************************************************************
* Collection util
* Kristian Marheim Abrahamsen, 2013
* MIT-Lisence
* https://github.com/KristianAbrahamsen/jquery.arrayUtilities
*********************************************************************/

(function ($) {
    var plugin = {};

    /*
    * Checks if all function arguments are arrays
    */
    var checkIfAllArgumentsAreArrays = function (functionArguments) {
        for (var i = 0; i < functionArguments.length; i++) {
            if (!(functionArguments[i] instanceof Array)) {
                throw new Error('Every argument must be an array!');
            }
        }
    }

    /*
    * Returns a new array with distinct elements
    */
    plugin.distinct = function (array) {
        if (arguments.length != 1) throw new Error('There must be exactly 1 array argument!');
        checkIfAllArgumentsAreArrays(arguments);

        var result = [];

        for (var i = 0; i < array.length; i++) {
            var item = array[i];

            if ($.inArray(item, result) === -1) {
                result.push(item);
            }
        }

        return result;
    }

    /*
    * Return a new array with distinct elements wich is an union of all input arrays 
    */
    plugin.union = function (/* minimum 2 arrays */) {
        if (arguments.length < 2) throw new Error('There must be minimum 2 array arguments!');
        checkIfAllArgumentsAreArrays(arguments);

        var result = this.distinct(arguments[0]);

        for (var i = 1; i < arguments.length; i++) {
            var arrayArgument = arguments[i];

            for (var j = 0; j < arrayArgument.length; j++) {
                var item = arrayArgument[j];

                if ($.inArray(item, result) === -1) {
                    result.push(item);
                }
            }
        }

        return result;
    }

    /*
    * Returns a new array with distinct elements which is a intersection of all input arrays
    */
    plugin.intersect = function (/* minimum 2 arrays */) {
        if (arguments.length < 2) throw new Error('There must be minimum 2 array arguments!');
        checkIfAllArgumentsAreArrays(arguments);

        var result = [];
        var distinctArray = this.distinct(arguments[0]);
        if (distinctArray.length === 0) return [];

        for (var i = 0; i < distinctArray.length; i++) {
            var item = distinctArray[i];

            var shouldAddToResult = true;

            for (var j = 1; j < arguments.length; j++) {
                var array2 = arguments[j];
                if (array2.length == 0) return [];

                if ($.inArray(item, array2) === -1) {
                    shouldAddToResult = false;
                    break;
                }
            }

            if (shouldAddToResult) {
                result.push(item);
            }
        }

        return result;
    }

    /*
    * Returns a new array with distinct elements from the first array input elements which are not present in the other arrays
    */
    plugin.except = function (/* minimum 2 arrays */) {
        if (arguments.length < 2) throw new Error('There must be minimum 2 array arguments!');
        checkIfAllArgumentsAreArrays(arguments);

        var result = [];
        var distinctArray = this.distinct(arguments[0]);
        var otherArraysConcatenated = [];

        for (var i = 1; i < arguments.length; i++) {
            var otherArray = arguments[i];
            otherArraysConcatenated = otherArraysConcatenated.concat(otherArray);
        }

        for (var i = 0; i < distinctArray.length; i++) {
            var item = distinctArray[i];

            if ($.inArray(item, otherArraysConcatenated) === -1) {
                result.push(item);
            }
        }

        return result;
    }

    $.arrayUtilities = plugin;

    $.distinct = plugin.distinct;
    $.union = plugin.union;
    $.intersect = plugin.intersect;
    $.except = plugin.except;
} (jQuery));