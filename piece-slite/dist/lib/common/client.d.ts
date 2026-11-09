import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { SliteNote } from './types';
declare function apiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: SliteApiCallParams): Promise<T>;
declare function getAllChildren({ apiKey, noteId, maxPages, }: {
    apiKey: string;
    noteId: string;
    maxPages?: number;
}): Promise<SliteNote[]>;
export declare const sliteApi: {
    baseUrl: string;
    call: typeof apiCall;
    getAllChildren: typeof getAllChildren;
};
export type SliteQuery = Record<string, string | number | boolean | string[] | undefined | null>;
export type SliteApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: SliteQuery;
    body?: unknown;
};
export {};
//# sourceMappingURL=client.d.ts.map