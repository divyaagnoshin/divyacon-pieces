import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { hunterAuth } from '../auth';
export declare function hunterApiCall({ apiKey, endpoint, method, qparams, body, }: {
    apiKey: AppConnectionValueForAuthProperty<typeof hunterAuth>;
    endpoint: string;
    method: HttpMethod;
    qparams?: QueryParams;
    body?: any;
}): Promise<any>;
//# sourceMappingURL=index.d.ts.map