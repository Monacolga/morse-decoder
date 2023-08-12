const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const exprArray = expr.match(/.{1,10}/g);
  // console.log(exprArray);
  const codedArray = exprArray.map((value) => {
    let codedWord = "";
    if (value === "**********") {
      return " ";
    }
    for (let i = 0; i < value.length; i += 2) {
      if (value[i] == 0 && value[i + 1] == 0) {
        codedWord += "";
      }
      if (value[i] == 1 && value[i + 1] == 0) {
        codedWord += ".";
      }
      if (value[i] == 1 && value[i + 1] == 1) {
        codedWord += "-";
      }
    }
    return codedWord;
    // console.log(codedWord);
  });
  // console.log(codedArray);
  const decodePhrase = codedArray.map((value) => {
    if (value === " ") {
      return " ";
    } else {
      return MORSE_TABLE[value];
    }
  });
  return decodePhrase.join("");
  // console.log(decodePhrase.join(""));
}

module.exports = {
  decode,
};
