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

// This is the translate function. It goes through the command line array and for each number, it finds the 
// phonetic equivalence for the integer and adds it to the final string to be outputted
function translate(arg){
    let out = " ";
    for(let i = 0; i < arg.length; i++){
        let num = arg[i];
        let st = num.toString();
        for(let j = 0; j < st.length; j++){
            let cha = st.charAt(j);
            let test = convert[cha];
            out += test; 
            test = " ";
        }
        if(i != arg.length-1){
            out += ",";
        }
    }
    process.stdout.write(out);
}

