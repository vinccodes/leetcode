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
    
};


