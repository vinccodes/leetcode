/* Reverse Only Letters

Given a string s, reverse the string according to the following rules:

    All the characters that are not English letters remain in the same position.
    All the English letters (lowercase or uppercase) should be reversed.

Return s after reversing it.

*/

const reverseOnlyLetters = (s) =>{
    let reverse = '';
    let end = s.length - 1;

    // iterate thru string
    for (let i = 0; i < s.length; i++) {
        // check if is punctuation
        if (s[i].includes("-!?.,'\"")) {
            if (s[i] == "-") {
              reverse = reverse + "-";
              console.log(reverse);
              continue;
            }
            continue;
        }
        // element is a letter
        let swapped = swap(s[i], s[end]);
        reverse = reverse + swapped[0];
        end--;
        console.log(reverse);

    }

    return reverse;
    
    // return reversed string
};

console.log(reverseOnlyLetters("ac-dc"), "cd-ca")
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"), "j-Ih-gfE-dCba")


// helper function to swap variables using temp variable
function swap(a,b) {
  let temp = a;
  a = b;
  b = temp;
  return [a,b]
}

