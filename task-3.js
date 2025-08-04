// --------------------for loop--------------------

const text = "Education";
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Convert the original text to lowercase for case-insensitive checking
const lowerText = text.toLowerCase();
// console.log(lowerText);

// Initialize allVowelsFound as true initially
let allVowelsFound = true;

// Loop through each vowel in the vowels array
for (let i = 0; i < vowels.length; i++) {
    // Get the current vowel to check
    let currentVowel = vowels[i];
    // console.log(currentVowel);

    // Check if this vowel is not present in the lowercased text
    if (!lowerText.includes(currentVowel)) {
        // If vowel is missing, set flag to false
        allVowelsFound = false;
        break;
    }
    // console.log(allVowelsFound);
}
console.log(allVowelsFound);