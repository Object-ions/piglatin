// 1. take the sentence and store individual words in a new array
// 2. break every word in the arrays  into [letters]
// 3. each word of the array and do this:
    // a. break the word into leters (array)
    // b. add first element in the array and .psh it to the end of the arry
    // c. concat() all array again
// 4. display console.log to the user


Describe: PigLattin ()
Test: it break the text into an array of words
code: function pigLatin(text) {
    words = text.split(" ");
    console.table(words);
    expected outcome. breaks words into array of words
    passed

test: it should break words in to arrays of letters 
code: function wordsToLetters(words) {
    letters = words.join().split("");
    console.table(letters);
}
expected outcome: break words into arrays of leters 
passed 

