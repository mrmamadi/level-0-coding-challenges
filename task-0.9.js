function getVowels(word) {

    const matchedVowels = [];
    const vowels = ['a','e','i','o','u'];
    word = word.toLowerCase();
    const splitWord = word.split('');
    for (let i=0; i<vowels.length; i++) {
        if (splitWord.indexOf(vowels[i]) >= 0) { //indexOf returns -1 if vowel not in word
            matchedVowels.push(vowels[i])
        }
    }
    console.log(`Vowels: ${matchedVowels.join(', ')}`)
}