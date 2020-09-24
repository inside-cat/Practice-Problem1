const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// This function will determine whether a given letter is a vowel by checking it against the vowels array
function isVowel(letter){
    return vowels.includes(letter);
}

let newString = prompt("Type a sentence");
// Splits the sentence into an array with each word as a separate item
let words = newString.split(/[ ,]+/);
let newWords = [];
// console.log(words);
// Loops through the words array
// Splits each word up into an array where each of its letters are separate items
words.forEach(function(word){
    let letters = word.split('');
//     console.log(letters);
    let index = 0;
    let vowelsInWord = [];
    let vowelPosition = [];
    // Checks each letter to see if it is a vowel
    // If so, pushes the letter to an array of the vowels in the word 
    // and pushes the index of the vowel's position within the word to another array
    letters.forEach(function(letter){
        let isAVowel = isVowel(letter);
        if(isAVowel === true){
            vowelsInWord.push(letter);
            vowelPosition.push(index);
//             console.log(vowelsInWord);
//             console.log(vowelPosition);
        }
        index += 1;
    })
    
    // Uses the shuffle function to shuffle the vowels in the vowel array into a new arrangement
    let shuffledVowels = shuffle(vowelsInWord);
//     console.log(shuffledVowels);

    let index2 = 0;
    let newLetters = [];
    // Loops through each letter in the original word once more 
    // in order to replace the vowels in their original positions with the shuffled vowels
    letters.forEach(function(letter){
        let isAVowel = isVowel(letter);
//         let currentVowelPosition = vowelPosition[index2];
        let correspondingVowel = shuffledVowels[index2];
        if(isAVowel === true){
            newLetters.push(correspondingVowel);
            index2 += 1;
        } else {
            newLetters.push(letter);
        }
    });
//     console.log(newLetters);

    // Puts all the letters back together in their new order in a string
    let newWord = newLetters.join("");
    newWords.push(newWord);
});
// console.log(newWords);

// console logs the final result after putting all the rearranged words back into a sentence string
console.log(newWords.join(" "));

// This function shuffles an array
// Found on the internet somewhere and restructured slightly to fit my code
function shuffle(array){
    let count = array.length;
    let temp;
    let index;
    while(count>1){
        index = Math.floor(Math.random() * count); 
        count -= 1;
        temp = array[count];
        array[count] = array[index];
        array[index] = temp;   
    }
    return array;
};
