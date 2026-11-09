import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const sendgridCommon: {
    baseUrl: (residency?: string) => string;
};
export declare function getApiKey(auth: SendgridAuthValue): string;
export declare function getBaseUrl(auth: SendgridAuthValue): string;
export declare function fetchAllLists(auth: SendgridAuthValue): Promise<SendgridList[]>;
export declare const sendgridAuth: (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    dataResidency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[];
export type SendgridAuthValue = AppConnectionValueForAuthProperty<typeof sendgridAuth>;
export type SendgridList = {
    id: string;
    name: string;
    contact_count: number;
};
//# sourceMappingURL=index.d.ts.map