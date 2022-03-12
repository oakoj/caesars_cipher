// declare a function rot13 that takes in an input string str
function rot13(str) {
  // declare a constant dictionary which contains key value pairs for ROT13
  const dictionary = {
    'A': 'N', 'N': 'A', 'B': 'O', 'O': 'B', 'C': 'P', 'P': 'C', 'D': 'Q', 'Q': 'D', 'E': 'R', 'R': 'E', 'F': 'S', 'S': 'F', 'G': 'T', 'T': 'G', 'H': 'U', 'U': 'H', 'I': 'V', 'V': 'I', 'J': 'W', 'W': 'J', 'K': 'X', 'X': 'K', 'L': 'Y', 'Y': 'L', 'M': 'Z', 'Z': 'M'
  }
  // declare a constant regex for the uppercased a-z letters
  const regex = /[A-Z]/
  // declare a variable replaced to be an empty string
  let replaced = ''
  // loop through the input string
  for (let i = 0; i < str.length; i++) {
    // if the string at index i matches the regex
    if (str[i].match(regex)) {
      // concatenate the ROT13 value onto replaced
      replaced += dictionary[str[i]]
    // else
    } else {
      // concatenate the character of the string at index i onto replaced
      replaced += str[i]
    }
  }
  // return replaced
  return replaced;
}

rot13("SERR PBQR PNZC");
