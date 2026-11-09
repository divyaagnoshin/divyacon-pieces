import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { retellAiAuth } from './auth';
export type RetellAiApiCallParams = {
    method: HttpMethod;
    url: string;
    body?: unknown;
    auth: AppConnectionValueForAuthProperty<typeof retellAiAuth>;
};
export declare function retellAiApiCall<T extends HttpMessageBody>({ method, url, body, auth }: RetellAiApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map