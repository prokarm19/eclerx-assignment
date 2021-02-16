var sentence = "What is your name, what would you name your pet?"
function wordCount(sentence) {

      console.log(`sentence is ${sentence}`);
      wordarray = sentence.split(""); // splitting each word into array 

      let onlywords = wordarray.filter((word) => word.match(/[\w]/gi)) // removing any special charachters using regX
      var wordlist = {}
      onlywords.forEach((character) => {
            let count = onlywords.filter((element) => {
                  return character === element
            })
            if (!wordlist[character]) {
                  wordlist[character] = count.length;
            }

      });
      return wordlist;
}

console.log(wordCount(sentence));