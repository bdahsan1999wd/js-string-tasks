const text = "Bangladesh";

// Initialize counter for counting 'a'
let count = 0;

for (let i = 0; i < text.length; i++) {

    // Get the current character
    let currentChar = text[i];
    // console.log(currentChar);

    // Convert the character to lowercase
    let lowerChar = currentChar.toLowerCase();
    // console.log(lowerChar);

    // Check if the character is 'a'
    if (lowerChar === 'a') {
        // Increase the count by 1
        count++;
    }
}

console.log(count);