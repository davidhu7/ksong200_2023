// Leyang Hu
// A simple solution that would be viable is to create an object that uses the numbers as keys 
// and their respective english names as values. We then read in all of the values from stdin and 
// create a string with all of the numbers with their phonetic equivalence. 


// This is the object with all of the numbers with their phonetic equivalence
var convert = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero",
}

// This calls upon the main function
main();

// This is the main function that splices off the first two command line arguments and leaves us an array
// with the numbers that need to be converted
function main(){
    let args = process.argv.slice(2);
    translate(args);
}

function translate(arg){

}

