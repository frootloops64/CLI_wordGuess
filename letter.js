var Letter = function (letter) {
    this.letter = letter;
    this.letterGuess = false;

    this.showChar = function () {
        if (this.letterGuess) {
            return this.letter
        } else {
            return '_'
        }
    }
}

module.exports = Letter;