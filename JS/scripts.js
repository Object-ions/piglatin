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

let sentence = "hello world night we are looking for something dumb to do";
sentence = sentence.toLocaleUpperCase();
let arrWords = [];
let letters = [];
let check1;
let afterJoin;

function pigLatin(sentence) {
    arrWords = sentence.split(" ");
    // console.table(arrWords);

    letters = []; 
    
    arrWords.forEach(function wordsToLetters(word, i) {
        // console.log(word, i);
        letters[i] = word.split("");

        console.log(letters[i]);
        // replaceFirst(letters)
    });
}

function replaceFirst(letters) {
    console.log("original word: " + letters[0]);
    
    check1 = letters[0].shift();
    console.log("before push: " + letters[0]);
    
    letters[0].push(check1);
    letters[0].push("A");
    console.log("after push: " + letters[0]);

    afterJoin = letters[0].join("");
    console.log("after join: " + afterJoin);
}

pigLatin(sentence);



