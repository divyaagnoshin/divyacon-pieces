import { QueryParams } from '@agnocon/pieces-common';
export interface Paging {
    items_per_page: number;
    current_page: number;
    count_pages: number;
    count_items: number;
}
export interface ListRequest<T extends object> {
    page?: number;
    filter?: T;
}
export declare function prepareListRequest(request: ListRequest<any>): QueryParams;
//# sourceMappingURL=common.d.ts.map