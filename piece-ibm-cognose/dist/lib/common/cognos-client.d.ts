import { HttpMethod } from '@agnocon/pieces-common';
export interface CognosAuth {
    baseurl: string;
    CAMNamespace: string;
    username: string;
    password: string;
}
export declare class CognosClient {
    private auth;
    private sessionCookies?;
    constructor(auth: CognosAuth);
    createSession(): Promise<string>;
    makeAuthenticatedRequest(endpoint: string, method?: HttpMethod, body?: any): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
}
//# sourceMappingURL=cognos-client.d.ts.map