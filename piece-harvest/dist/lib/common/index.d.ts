import { DynamicPropsValue } from '@agnocon/pieces-framework';
import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function callHarvestApi<T extends HttpMessageBody = any>(method: HttpMethod, apiUrl: string, accessToken: string, queryParams?: any | undefined, body?: any | undefined, headers?: any | undefined): Promise<HttpResponse<T>>;
export declare function filterDynamicFields(dynamicFields: DynamicPropsValue): {
    [key: string]: string;
};
//# sourceMappingURL=index.d.ts.map