import { HttpMethod } from '@agnocon/pieces-common';
export declare const twilioCommon: {
    phone_number: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
};
export declare const callTwilioApi: <T extends unknown>(method: HttpMethod, path: string, auth: {
    account_sid: string;
    auth_token: string;
}, body?: any) => Promise<import("@agnocon/pieces-common").HttpResponse<T>>;
//# sourceMappingURL=index.d.ts.map