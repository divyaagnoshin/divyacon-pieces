import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { BaserowField, BaserowTable } from './types';
export declare function prepareQuery(request?: Record<string, unknown>): QueryParams;
export declare class BaserowClient {
    private baseUrl;
    private authHeader;
    private isJwt;
    constructor(baseUrl: string, authHeader: string, isJwt?: boolean);
    static getJwtToken({ apiUrl, email, password, }: {
        apiUrl: string;
        email: string;
        password: string;
    }): Promise<string>;
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, url: string, query?: QueryParams, body?: object): Promise<T>;
    listTables(): Promise<BaserowTable[]>;
    listTableFields(table_id: number): Promise<BaserowField[]>;
    createRow(table_id: number, request: Record<string, unknown>): Promise<unknown>;
    updateRow(table_id: number, row_id: number, request: Record<string, unknown>): Promise<unknown>;
    deleteRow(table_id: number, row_id: number): Promise<unknown>;
    getRow(table_id: number, row_id: number): Promise<unknown>;
    listRows(table_id: number, page?: number, limit?: number, search?: string, order_by?: string, filters?: Record<string, string>, advancedFilters?: {
        filter_type: string;
        filters: {
            field: number;
            type: string;
            value: string;
        }[];
    }): Promise<{
        results: Array<{
            id: number;
        } & Record<string, unknown>>;
        count: number;
    }>;
    batchCreateRows(table_id: number, items: unknown[]): Promise<{
        items: Record<string, unknown>[];
    }>;
    batchUpdateRows(table_id: number, items: unknown[]): Promise<{
        items: Record<string, unknown>[];
    }>;
    batchDeleteRows(table_id: number, ids: number[]): Promise<unknown>;
    listViews(table_id: number): Promise<{
        id: number;
        name: string;
        type: string;
    }[]>;
    aggregateField(view_id: number, field_id: number, aggregation_type: string): Promise<{
        value: unknown;
    }>;
    updateFieldSelectOptions({ fieldId, existingOptions, newOptions, }: {
        fieldId: number;
        existingOptions: {
            id: number;
            value: string;
            color: string;
        }[];
        newOptions: string[];
    }): Promise<{
        select_options: {
            id: number;
            value: string;
            color: string;
        }[];
    }>;
    createWebhook({ tableId, url, events, name, }: {
        tableId: number;
        url: string;
        events: string[];
        name: string;
    }): Promise<{
        id: number;
    }>;
    deleteWebhook(webhookId: number): Promise<void>;
    uploadFileFromUrl({ url }: {
        url: string;
    }): Promise<Record<string, unknown>>;
}
//# sourceMappingURL=client.d.ts.map