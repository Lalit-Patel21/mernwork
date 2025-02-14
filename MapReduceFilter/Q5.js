// 5. Devs like to abbreviate everything: k8s means Kubernetes,
//  a11y means accessibility, l10n means localization.
//  You get the Dev numeronyms by taking the first and
//  the last letter and counting the number of letters in between.
//   Words that have less than 4 letters aren't abbreviated,
//   because that would just be odd. The input is a sentence,
//   and you should abbreviate every word that is 4 letters long or longer.
//   There won't be any punctuation in the sentence. g2d l2k e6e.

// const input = "Every developer likes to mix kubernetes and javascript";

// output: - "E3y d7r l3s to mix k8s and j8t";

function abbreviateSentence(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length < 4) return word;
      return word[0] + (word.length - 2) + word[word.length - 1];
    })
    .join(" ");
}

const input = "Every developer likes to mix kubernetes and javascript";
const output = abbreviateSentence(input);
console.log(output);
