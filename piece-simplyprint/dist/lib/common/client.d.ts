import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
declare function simplyprintCall<T extends Record<string, unknown> = Record<string, unknown>>(opts: SimplyprintCallOptions): Promise<SimplyprintResponse<T>>;
export declare const simplyprintClient: {
    simplyprintCall: typeof simplyprintCall;
};
export interface SimplyprintCallOptions {
    auth: OAuth2PropertyValue;
    method: HttpMethod;
    path: string;
    body?: HttpMessageBody;
    queryParams?: QueryParams;
    company?: number | 0;
}
export type SimplyprintResponse<T = Record<string, unknown>> = {
    status: boolean;
    message?: string;
} & T;
export {};
//# sourceMappingURL=client.d.ts.map