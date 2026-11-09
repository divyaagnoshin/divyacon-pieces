import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { zohoDeskAuth } from './auth';
export type ZohoDeskApiCallParams = {
    auth: PiecePropValueSchema<typeof zohoDeskAuth>;
    orgId?: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare function zohoDeskApiCall<T extends HttpMessageBody>({ auth, orgId, method, resourceUri, query, body, }: ZohoDeskApiCallParams): Promise<T>;
//# sourceMappingURL=index.d.ts.map