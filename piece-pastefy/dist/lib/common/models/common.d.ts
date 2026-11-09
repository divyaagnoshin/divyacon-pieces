import { QueryParams } from '@agnocon/pieces-common';
export interface ActionResponse {
    success: boolean;
}
export interface ListRequest {
    page?: number;
    page_size?: number;
    search?: string;
    filter?: Record<string, any>;
}
export declare function prepareQueryRequest(request?: ListRequest | Record<string, any | undefined>): QueryParams;
//# sourceMappingURL=common.d.ts.map