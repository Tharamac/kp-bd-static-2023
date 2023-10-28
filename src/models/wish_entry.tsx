enum CardPattern{
    bikini = "bikini",
    withAutumnSage = "withSage",
    orangeGoat = "orangeGoat",
}

interface WishEntryParam {
    senderName: string, 
    message:string, 
    pattern:CardPattern,
}

class WishEntry{
    id?: string;
    sender: string;
    message: string;
    pattern: CardPattern;
    constructor({senderName, message, pattern}: WishEntryParam) {
       // id are auto-generated
        this.message = message;
       this.pattern = pattern
       this.sender = senderName
    }
}

export {CardPattern, WishEntry}