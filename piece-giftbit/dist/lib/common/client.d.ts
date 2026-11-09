import { HttpMethod } from '@agnocon/pieces-common';
export declare const TESTBED_URL = "https://api-testbed.giftbit.com/papi/v1";
export declare const PRODUCTION_URL = "https://api.giftbit.com/papi/v1";
export declare const giftbitApiCall: ({ auth, method, resourceUri, body, useTestbed, }: {
    auth: string;
    method: HttpMethod;
    resourceUri: string;
    body?: unknown;
    useTestbed?: boolean;
}) => Promise<any>;
//# sourceMappingURL=client.d.ts.map