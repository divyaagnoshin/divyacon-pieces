export declare enum PastePrivacy {
    PUBLIC = "0",
    UNLISTED = "1",
    PRIVATE = "2"
}
export declare enum PasteExpiry {
    NEVER = "N",
    TEN_MINUTES = "10M",
    ONE_HOUR = "1H",
    ONE_DAY = "1D",
    ONE_WEEK = "1W",
    TWO_WEEKS = "2W",
    ONE_MONTH = "1M",
    SIX_MONTHS = "6M",
    ONE_YEAR = "1Y"
}
export interface PasteCreateRequest {
    paste_code: string;
    paste_private?: PastePrivacy;
    paste_name?: string;
    paste_expiry_date?: string;
    paste_format?: string;
    folder_key?: string;
}
export declare class PastebinClient {
    private token;
    private user_key?;
    constructor(token: string);
    setUserKey(user_key: string): void;
    makeRequest(script: string, option: string, body: Record<string, any>): Promise<string>;
    login(username: string, password: string): Promise<string>;
    createPaste(request: PasteCreateRequest): Promise<string>;
    getPasteContent(id: string): Promise<string>;
}
//# sourceMappingURL=client.d.ts.map