import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const simplyprintAuth: import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>;
declare function resolveSession(auth: OAuth2PropertyValue): Promise<CurrentSession>;
declare function resolveCall(auth: OAuth2PropertyValue): Promise<{
    headers: Record<string, string>;
    companyId: number;
}>;
declare function getAuthHeaders(auth: OAuth2PropertyValue): Record<string, string>;
export declare const simplyprintSession: {
    resolveSession: typeof resolveSession;
    resolveCall: typeof resolveCall;
    getAuthHeaders: typeof getAuthHeaders;
};
export type CurrentSession = {
    user: {
        id: number;
        name: string;
        email: string;
    };
    company: {
        id: number;
        name?: string;
    };
};
export {};
//# sourceMappingURL=auth.d.ts.map