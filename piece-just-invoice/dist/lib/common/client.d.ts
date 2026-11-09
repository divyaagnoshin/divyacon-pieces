import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export declare const JUSTINVOICE_API_URL = "https://api.justinvoice.io";
export type JustInvoiceApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    endpoint: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: unknown;
};
export declare function justInvoiceApiCall<T extends HttpMessageBody>({ apiKey, method, endpoint, query, body, }: JustInvoiceApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map