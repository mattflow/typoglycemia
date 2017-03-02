// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.typo = factory();
  }
}(this, function () {

    'use strict';

    function typo(input) {
        if (input.length <= 1)
            return input;
        if (punctuation.test(input))
            return split(input, punctuation.exec(input)[0]);
        var toRandomize = input.substring(1, input.length - 1).toLowerCase(),
            randomized = '';
        for (var i = toRandomize.length; i >= 0; i--) {
            var index = Math.floor(Math.random() * toRandomize.length);
            randomized += toRandomize.charAt(index);
            toRandomize = toRandomize.slice(0, index) + toRandomize.slice(index + 1, toRandomize.length);
        }
        return input.charAt(0) + randomized + input.charAt(input.length - 1);
    }

    function split(input, splitChar) {
        var wordList = input.split(splitChar);
        var typoList = wordList.map(typo);
        return typoList.join(splitChar);
    }

    var punctuation = /["(){}[\]<>/\\|`'*!@#$%^&\-_=+:;,.? ]/;
    
    return typo;
}));
