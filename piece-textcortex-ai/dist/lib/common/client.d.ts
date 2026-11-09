import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { textcortexAuth } from './auth';
export interface TextCortexAuth {
    auth: string;
}
export declare const textcortexCommon: {
    apiCall({ auth, method, resourceUri, body, headers, }: {
        auth: AppConnectionValueForAuthProperty<typeof textcortexAuth>;
        method: HttpMethod;
        resourceUri: string;
        body?: any;
        headers?: Record<string, string>;
    }): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=client.d.ts.map