import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { productboardAuth } from './auth';
export declare const productboardCommon: {
    baseUrl: string;
    apiCall({ auth, method, resourceUri, body, queryParams, }: {
        auth: AppConnectionValueForAuthProperty<typeof productboardAuth>;
        method: HttpMethod;
        resourceUri: string;
        body?: any;
        queryParams?: Record<string, string>;
    }): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=client.d.ts.map