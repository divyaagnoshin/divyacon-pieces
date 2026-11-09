import { HttpMessageBody, HttpMethod, HttpResponse, QueryParams } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { giteaAuth } from '../auth';
export type GiteaApiCallParams = {
    auth: AppConnectionValueForAuthProperty<typeof giteaAuth>;
    method: HttpMethod;
    resourceUri: string;
    query?: QueryParams;
    body?: Record<string, unknown>;
};
export type WebhookInformation = {
    webhookId: number;
    repo: string;
    owner: string;
};
export declare function giteaApiCall<T extends HttpMessageBody>({ auth, method, resourceUri, query, body, }: GiteaApiCallParams): Promise<HttpResponse<T>>;
export declare function giteaPaginatedApiCall<T extends HttpMessageBody>({ auth, method, resourceUri, query, body, }: GiteaApiCallParams): Promise<T[]>;
export declare function baseUrl(auth: AppConnectionValueForAuthProperty<typeof giteaAuth>): string;
//# sourceMappingURL=client.d.ts.map