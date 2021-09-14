function commonLetters(word1,word2) {
    word1 = word1.split('');
    word2 = word2.split('');

    const combinedArray = [];
    for (let i=0; i<word1.length; i++) {
        if (word2.indexOf(word1[i]) >= 0) {
            combinedArray.push(word1[i])
        }
    }

    combinedSet = new Set(combinedArray);
    console.log(`Common letters: ${[...combinedSet].join(', ')}`) //spread syntax
}