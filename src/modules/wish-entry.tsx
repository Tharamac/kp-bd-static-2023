import { Inputs } from "@/pages/form";

import {v4 as uuidv4} from 'uuid';
import { DateTime } from 'luxon';
import { CardPattern, cardPatternMatch } from "./card-pattern";


interface WishEntryParam {
    id: string | undefined
    senderName: string, 
    message: string, 
    pattern: CardPattern,
    createdDate: DateTime,
}

export type WishEntryDto = {
    _id: string
    sender: string, 
    message: string, 
    pattern: CardPattern,
    createdDate: string,
}


class WishEntry{
    id: string | undefined;
    sender: string;
    message: string;
    pattern: CardPattern;
    createdDate: DateTime;
    
    constructor({id, senderName, message, pattern, createdDate}: WishEntryParam) {
        this.id = id
        this.message = message;
        this.pattern = pattern
        this.sender = senderName
        this.createdDate = createdDate
    }

    public static fromInputs(entry: Inputs): WishEntry{
        return new WishEntry({
            id: undefined,
            senderName: entry.senderName,
            message: entry.wishMessage,
            pattern: cardPatternMatch(entry.cardPattern),
            createdDate: DateTime.now(),
        })
    }

    public static fromDto(entry: WishEntryDto): WishEntry{
        return new WishEntry({
            id: entry._id,
            senderName: entry.sender,
            message: entry.message,
            pattern: cardPatternMatch(entry.pattern),
            createdDate: DateTime.fromISO(entry.createdDate).setZone('Asia/Bangkok')
            
        })
    }
}

export { WishEntry, CardPattern};
 