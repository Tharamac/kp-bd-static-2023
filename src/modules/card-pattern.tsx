
enum CardPattern{
    // bikini = "bikini",
    // withSage = "withSage",
    orangeGoat = "orangeGoat",
    earrings = "earrings",
    maple = "maple",
    kpMask = "kpMask",
    sunflower = "sunflower",
}

function cardPatternMatch(patternString: string): CardPattern {
    return CardPattern[patternString as keyof typeof CardPattern];
}


function getStyle(pattern?: CardPattern) {
    switch (pattern){
        case CardPattern.earrings:
          return {
            
            footerImageSource: "/img/icon/kpBadge.png",
            backgroundColor: "#bfb3fa",
            borderColor: "#8978db",
        }
        case CardPattern.kpMask:
            return {
                headerImageSource: "/img/icon/kpMask.png",
                backgroundColor: "#cee8f9",
                borderColor: "#76b2db",
            }

        case CardPattern.maple:
            return {
            
                headerImageSource: "/img/icon/maple.png",
                footerImageSource: "/img/icon/orange.png",
                backgroundColor: "#CEEECE",
                borderColor: "#7DBD7E",
            }


        case CardPattern.sunflower:
            return {    
                headerImageSource: "/img/icon/sunflower.png",
                footerImageSource: "/img/icon/orange.png",
                backgroundColor: "#ffe577",
                borderColor: "#f6c806",
            }

        case CardPattern.orangeGoat:
            return {
                footerImageSource: "/img/icon/orangeGoat.png",
                headerImageSource: "/img/icon/orange.png",
                backgroundColor: "#ffb89d",
                borderColor: "#ff8556",
            }
        default: 
            return {
                headerImageSource: "/img/icon/rainbowFruit.png",
                footerImageSource: "/img/icon/rainbowGoat.png",
                backgroundColor: "#FDF4DC",
                borderColor: "#d9c182",
            }
            
    }
}

export {CardPattern, cardPatternMatch, getStyle}