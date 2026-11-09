import { HttpMethod } from '@agnocon/pieces-common';
import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const teamleaderCommon: {
    baseUrl: string;
    apiCall({ auth, method, resourceUri, body, queryParams, }: {
        auth: OAuth2PropertyValue;
        method: HttpMethod;
        resourceUri: string;
        body?: any;
        queryParams?: Record<string, string>;
    }): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=client.d.ts.map