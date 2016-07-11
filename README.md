# typoglycemia

This program takes text and randomly scrambles each letter besides the first and last ones. A lot of the time, humans can still read and understand words as long as the first and last letter are in the correct spot. I wrote this program to test that.

## Usage

```javascript
var typo = require('./typo.js');

var typoText = typo('Typoglycemia is a neologism given to a ' + 
                    'purported recent discovery about the '   + 
                    'cognitive processes behind reading '     +
                    'written text.');

console.log(typoText);

// output -> Tplieomcgyya is a negolosim geivn to a pptruored rnceet doesircvy auobt the cotnviige psorseecs bihned rendaig wittern text.

```

## Urban Legend

I first learned about this phenomena from an internet post. I assumed it wasn't true, and after some research, I was able to confirm that. I made this program as a simple experiment to see how often the text is actually able to be read by someone who did not know the original message.

I plan on adding strategies to still scramble the letters, but in a way where the words can still be read.
