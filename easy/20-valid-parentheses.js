/* 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.


    { { } [ ] [ [ [ ] ] ] } // is next index equal closing bracket? no go to s.length - 1, is index equal closing bracket? yes. remove
      { } [ ] [ [ [ ] ] ]
          [ ] [ [ [ ] ] ]
              [ [ [ ] ] ]
                [ [ ] ]
                  [ ]


    0: 0 + n -1, remove
    1: 0 + 1, remove 
    2: 0 + 1, remove (they are one after the other)
    3: 0 + n - 1
    4. 0 + n - 1
    5. 0 + n - 1
    6. s == ""

*/

const isValid = (s) => {
    const openingParentheses = "({[";
    const closingParentheses = ")}]";

    const bracketOne = [];
    const bracketTwo = []; 
    let inputString = s;

    // recursive base case
    if (s == "") {
        return true;
    }
    // get the opening bracket
    for (let i = 0; i < inputString.length; i++) {
        // is an opening parenth. ?
        if (inputString[i].includes(openingParentheses)) {
            for (let j = 0; j < openingParentheses.length; j++) {
                // check which type of opening bracket
                if (inputString[i] == openingParentheses[j]) {
                    bracketOne = openingParentheses[j];
                    bracketTwo = closingParentheses[j];
                }
            }
            // check: is the next index the closing bracket?
            if (bracketTwo == inputString[i + 1]) {
                // remove first elements twice
        
            }
            // get the closing bracket
            if (inputString[inputString.length - 1] == bracketTwo) {
                // remove first and last element
            }
        }

    // closing bracket not found: not valid string
    }
};


