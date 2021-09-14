function commonLetters(word1,word2) {
    word1 = word1.split('');
    word2 = word2.split('');

    const combinedArray = [];
    for (let i=0; i<word1.length; i++) {
        for (let j=0; j<word2.length; j++) {
            if (word1[i]==word2[j]) {
                combinedArray.push(word1[i])
            }
        }
    }
    combinedSet = new Set(combinedArray);
    console.log(`Common letters: ${[...combinedSet].join(', ')}`) //spread syntax
}