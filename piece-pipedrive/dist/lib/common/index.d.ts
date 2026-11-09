import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { GetField, RequestParams } from './types';
export declare const pipedriveCommon: {
    subscribeWebhook: (object: string, action: string, webhookUrl: string, apiDomain: string, accessToken: string) => Promise<{
        data: {
            id: string;
        };
    }>;
    unsubscribeWebhook: (webhookId: string, apiDomain: string, accessToken: string) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
export type PipedriveApiCallParams = {
    accessToken: string;
    apiDomain: string;
    method: HttpMethod;
    resourceUri: string;
    query?: RequestParams;
    body?: any;
};
export declare function pipedriveApiCall<T extends HttpMessageBody>({ accessToken, apiDomain, method, resourceUri, query, body, }: PipedriveApiCallParams): Promise<T>;
export declare function pipedrivePaginatedV1ApiCall<T extends HttpMessageBody>({ accessToken, apiDomain, method, resourceUri, query, body, }: PipedriveApiCallParams): Promise<T[]>;
export declare function pipedrivePaginatedV2ApiCall<T extends HttpMessageBody>({ accessToken, apiDomain, method, resourceUri, query, body, }: PipedriveApiCallParams): Promise<T[]>;
export declare function pipedriveParseCustomFields(customFieldsDefinitions: GetField[], inputData: Record<string, any>): Record<string, any>;
export declare function pipedriveTransformCustomFields(customFieldsDefinitions: GetField[], responseData: Record<string, any>): Record<string, any>;
export declare function pipedriveTransformV1CustomFields(CustomFields: GetField[], responseData: Record<string, any>): Record<string, any>;
//# sourceMappingURL=index.d.ts.map