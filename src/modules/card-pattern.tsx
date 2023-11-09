
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


function getStyle(pattern?: CardPattern) {
    switch (pattern){
        case CardPattern.bikini:
            return {
                headerImageSource: "/img/icon/20230727153227-31419e74-c30d-4662-ba3b-7fc77ab28968.png",
                footerImageSource: "/img/count/HamHamTextbox4.png",
                backgroundColor: "#B3E5FC",
                borderColor: "#4FC3F7",
            }
        case CardPattern.withSage:
            return {
                headerImageSource: "/img/icon/20230727152958-f08c0f94-dcc0-4366-9eec-13b1c5c5d6e7.png",
                footerImageSource: "/img/icon/20230727153149-141a60ce-e086-4f4a-b624-966315f86c46.png",
                backgroundColor: "#E5B77F",
                borderColor: "#774c17",
            }
        case CardPattern.orangeGoat:
            return {
                headerImageSource: "/img/icon/20230727153257-10f56244-bd4b-47d2-90db-b5ee7c2cc743.png",
                footerImageSource: "/img/icon/20230727153044-d9c2b1d6-c5a1-405f-a995-5fab50ac98ee.png",
                backgroundColor: "#FDF4DC",
                borderColor: "#EC975F",
            }
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