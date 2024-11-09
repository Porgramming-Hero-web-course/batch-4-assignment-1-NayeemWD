{
  //
  const countWordOccurrences = (sentence: string, word: string): number => {
    const lowerCaseS = sentence.toLowerCase();
    const lowerCaseW = word.toLowerCase();

    const fastSentence = lowerCaseS.split(" ");
    const finalSentence = fastSentence.filter(
      (words) => words === lowerCaseW
    ).length;

    return finalSentence;
  };

  const sentence = "I love typescript";
  const word = "typescript";

  console.log(countWordOccurrences(sentence, word));

  //
}
