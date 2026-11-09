import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { flowParserAuth } from './auth';
export type FlowParserApiCallParams = {
    method: HttpMethod;
    path: string;
    queryParams?: Record<string, string | number | string[] | undefined>;
    body?: any;
    auth: PiecePropValueSchema<typeof flowParserAuth>;
};
export declare function flowParserApiCall<T extends HttpMessageBody>({ method, path, queryParams, body, auth, }: FlowParserApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map