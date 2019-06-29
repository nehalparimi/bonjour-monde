let text = "hello this is a sample script, a script with repeating letters";
let obj = {};
let splitArray = text.split(/\w+/g);

// Remove punctuation attached to words, and punctuation marks in themselves

// Do we count and then add to object,
// or add all keys to obejct and then count?
// We'll do #2

// array runner:
function instances(word) {
    let count = 0;

    // Error checking would be good here
    if (typeof (self) !== 'Array') return 0;

    for(let element of self) {
        if (element === word) count += 1;
    }
    return count;
}

// Unique-ize:
splitArray.filter(word => {
    if (splitArray.instances(word) > 1) {

    }   
})

// Split by whitespace and add to object
console.log(splitArray);

// Do the counting and update to 