
enum CardPattern{
    bikini = "bikini",
    withSage = "withSage",
    orangeGoat = "orangeGoat",
}

function cardPatternMatch(patternString: string): CardPattern {
    return CardPattern[patternString as keyof typeof CardPattern];
}

// interface CardPatternStyle {
//     headerImageSource: string,
//     footerImageSource: string,
//     backgroundColor: string,
//     borderColor: string,
// }


function getStyle(pattern: CardPattern) {
    switch (pattern){
        case CardPattern.bikini:
        case CardPattern.withSage:
        case CardPattern.orangeGoat:
        default: 
            return {
                headerImageSource: "/img/icon/20230727153257-10f56244-bd4b-47d2-90db-b5ee7c2cc743.png",
                footerImageSource: "/img/icon/20230727153044-d9c2b1d6-c5a1-405f-a995-5fab50ac98ee.png",
                backgroundColor: "#FDF4DC",
                borderColor: "#EC975F",
            }
    }
       


}

export {CardPattern, cardPatternMatch, getStyle}