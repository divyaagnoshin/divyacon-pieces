import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { AddEventPage } from './types';
declare function apiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: AddEventApiCallParams): Promise<T>;
declare function getAllPages<T extends HttpMessageBody>({ apiKey, resourceUri, select, query, maxPages, }: {
    apiKey: string;
    resourceUri: string;
    select: (page: AddEventPage) => T[];
    query?: AddEventQuery;
    maxPages?: number;
}): Promise<T[]>;
declare function getItemsSince<T extends HttpMessageBody>({ apiKey, resourceUri, select, getCreated, sinceEpochMs, query, maxPages, }: {
    apiKey: string;
    resourceUri: string;
    select: (page: AddEventPage) => T[];
    getCreated: (item: T) => string;
    sinceEpochMs: number;
    query?: AddEventQuery;
    maxPages?: number;
}): Promise<T[]>;
declare function toEpochMs(created: string): number;
export declare const addEventApi: {
    baseUrl: string;
    maxPageSize: number;
    call: typeof apiCall;
    getAllPages: typeof getAllPages;
    getItemsSince: typeof getItemsSince;
    toEpochMs: typeof toEpochMs;
};
export type AddEventQuery = Record<string, string | number | boolean | string[] | undefined | null>;
export type AddEventApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: AddEventQuery;
    body?: unknown;
};
export {};
//# sourceMappingURL=client.d.ts.map