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
let check = [];
let afterJoin;

function pigLatin(sentence) {
    arrWords = sentence.split(" ");
    // console.table(arrWords);
    
    arrWords.forEach(function wordsToLetters(word, i) {
        // console.log(word, i);
        letters[i] = word.split("");

        console.log(letters[i]);
        // replaceFirst(letters)
    });
    replaceFirst();
}

letters.forEach(function replaceFirst(letter, i) {
    
    console.log("original word: " + letters[i]);
    
    check[i] = letters[i].shift()
    console.log("before push: " + letters[i]);
    
    letters[i].push(check1);
    letters[i].push("A");
    console.log("after push: " + letters[i]);

    afterJoin = letters[i].join("");
    console.log("after join: " + afterJoin);
});



pigLatin(sentence);



