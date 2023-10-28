enum CardPattern{
    bikini,
    withAutumnSage,
    orangeGoat,
}

class WishEntry{
    id: string | undefined;
    sender: string;
    message: string;
    pattern: CardPattern;
    constructor(senderName: string, message:string, pattern:CardPattern) {
       // id are auto-generated
        this.message = message;
       this.pattern = pattern
       this.sender = senderName
    }
}

export {CardPattern, WishEntry}