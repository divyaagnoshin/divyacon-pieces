import { HttpMethod } from "@agnocon/pieces-common";
export declare const emailOctopusApiUrl = "https://api.emailoctopus.com";
export interface EmailOctopusListDetails extends EmailOctopusList {
    fields: {
        tag: string;
        type: 'text' | 'number' | 'date' | 'choice_single' | 'choice_multiple';
        label: string;
        choices: string[];
    }[];
}
export declare class EmailOctopusClient {
    private apiKey;
    constructor(apiKey: string);
    makeRequest<T>(method: HttpMethod, url: string, body?: object): Promise<T>;
    getLists(): Promise<EmailOctopusList[]>;
    getList(listId: string): Promise<EmailOctopusListDetails>;
    getCampaigns(): Promise<EmailOctopusCampaign[]>;
}
export interface EmailOctopusList {
    id: string;
    name: string;
    created_at: string;
}
export interface EmailOctopusCampaign {
    id: string;
    name: string;
    status: string;
    created_at: string;
}
//# sourceMappingURL=client.d.ts.map