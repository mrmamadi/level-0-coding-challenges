function maximum() {
    let highestValue = 0;
    for (let i = 0; i<arguments.length; i++) { // arguments refers to all parameters entered into function
        if (arguments[i] > highestValue) {
            highestValue = arguments[i];
        }
    }
    return highestValue
}