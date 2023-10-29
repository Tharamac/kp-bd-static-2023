import { Inputs } from "@/pages/form";
import { CardPattern, cardPatternMatch } from "./card_pattern";
import {v4 as uuidv4} from 'uuid';



interface WishEntryParam {
    senderName: string, 
    message: string, 
    pattern: CardPattern,
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

    public static fromInputs(entry: Inputs): WishEntry{
        const wishEntry = new WishEntry({
            senderName: entry.senderName,
            message: entry.wishMessage,
            // pattern: CardPattern.bikini,
            pattern: cardPatternMatch(entry.cardPattern),
        })
        wishEntry.id = uuidv4()
        return wishEntry
    }
}

export { WishEntry, CardPattern };