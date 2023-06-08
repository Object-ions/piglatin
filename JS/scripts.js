// function wordCounter(text) {
//     if (text.trim().length === 0) {
//     return 0;
//     }
//     let wordCount = 0;
//     const textArray = text.split(" ");
//     textArray.forEach(function(element) {
//     if (!Number(element)) {
//         wordCount++;
//     }
//     });
//     return wordCount;
// }
// function numberOfOccurrencesInText(word, text) {
//     const textArray = text.split(" ");
//     let wordCount = 0;
//     textArray.forEach(function(element) {
//     if (word.toLowerCase() === element.toLowerCase()) {
//         wordCount++;
//     }
//     });
//     return wordCount;
// }
let text;
let sentence = "hello world"
let words = [];
let wordsSave = [];
let letters = [];
let word1;
let word2;
let check1;
let afterJoin;

function pigLatin(sentence) {
    words = sentence.split(" ");
    console.table(words);
    
    word1 = words[0];
    word2 = words[1];
    console.log("word1: " + word1 + " word2: " + word2);
    wordsToLetters(word1 , word2);
}

function wordsToLetters() {
    letters[1] = word1.split("");
    letters[2] = word2.split("");
    console.log(letters[1]);

    replaceFirst(letters)
}

function replaceFirst(letters) {
    check1 = letters[1].shift();
    letters[1].push(check1);
    letters[1].push("a")
    
    console.log("after push: " + letters[1]);

    afterJoin = letters[1].join("");
    console.log("after join: " + afterJoin);
}


