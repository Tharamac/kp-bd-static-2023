
enum CardPattern{
    bikini = "bikini",
    withSage = "withSage",
    orangeGoat = "orangeGoat",
}

function cardPatternMatch(patternString: string): CardPattern {
    return CardPattern[patternString as keyof typeof CardPattern];
}

export {CardPattern, cardPatternMatch}