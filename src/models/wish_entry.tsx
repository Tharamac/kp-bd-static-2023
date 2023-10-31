import { Inputs } from "@/pages/form";
import { CardPattern, cardPatternMatch } from "./card_pattern";
import {v4 as uuidv4} from 'uuid';



interface WishEntryParam {
    id: string 
    senderName: string, 
    message: string, 
    pattern: CardPattern,
}

type WishEntryDto = {
    id: string
    sender: string, 
    message: string, 
    pattern: CardPattern,
}


class WishEntry{
    id?: string;
    sender: string;
    message: string;
    pattern: CardPattern;
    constructor({id, senderName, message, pattern}: WishEntryParam) {
        this.id = id
        this.message = message;
        this.pattern = pattern
        this.sender = senderName
    }

    public static fromInputs(entry: Inputs): WishEntry{
        return new WishEntry({
            id: uuidv4(),
            senderName: entry.senderName,
            message: entry.wishMessage,
            pattern: cardPatternMatch(entry.cardPattern),
        })
    }

    public static fromDto(entry: WishEntryDto): WishEntry{
        return new WishEntry({
            id: entry.id,
            senderName: entry.sender,
            message: entry.message,
            pattern: cardPatternMatch(entry.pattern),
        })
    }
}

export { WishEntry, CardPattern };
export type { WishEntryDto };
 