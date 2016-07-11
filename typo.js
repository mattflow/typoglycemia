module.exports = (function() {
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
}());
