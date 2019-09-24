const sentence = "Hello there from Lighthouse Labs.";

const newSentence = sentence.split("");
let time = 0;
for (let i = 0; i < newSentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(newSentence[i]);
  }, time += 50);
  if (newSentence[i] === '.') {
    newSentence[i] = "\n";
  }
}