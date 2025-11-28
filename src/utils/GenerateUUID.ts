import { v4 as uuidv4 } from 'uuid';

export class GenerateUUID {
    public static generate(): string {
        return uuidv4();
    }

}