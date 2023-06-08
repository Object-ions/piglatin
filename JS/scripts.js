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

let sentence = "hello world";
sentence = sentence.toLocaleUpperCase();
let arrWords = [];
let letters = [];
let check = [];
let afterJoin = [];

function pigLatin(sentence) {
    arrWords = sentence.split(" ");
    // console.table(arrWords);
    let outputString = "";
    arrWords.forEach(function wordsToLetters(word, i) {
        // console.log(word, i);
        letters = word.split("");

        // console.log(letters[i]);
        outputString = outputString + replaceFirst(letters) + "  ";
    });
    console.log(outputString);
}

function replaceFirst(letters) {
    
    let newSentence = "";
    let firstLetter = letters[0];
    letters.shift();
    letters.push(firstLetter);
    letters.push("A");
    newSentence = letters.join();

    // console.log(newSentence);
    return newSentence;

    
    
}

pigLatin(sentence);



