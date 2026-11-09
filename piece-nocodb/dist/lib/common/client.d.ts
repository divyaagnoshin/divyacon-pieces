import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { BaseResponse, DataOperationResponse, GetTableResponse, GetTableV3Response, ListAPIResponse, ListAPIV3Response, ListRecordsParams, TableResponse, WorkspaceResponse } from './types';
export declare class NocoDBClient {
    private hostUrl;
    private apiToken;
    constructor(hostUrl: string, apiToken: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: Record<string, string | number | string[] | undefined>, body?: Record<string, unknown> | undefined): Promise<T>;
    listWorkspaces(): Promise<ListAPIResponse<WorkspaceResponse>>;
    listBases(workspaceId?: string, version?: number): Promise<ListAPIResponse<BaseResponse>>;
    listTables(baseId: string, version?: number): Promise<ListAPIResponse<TableResponse>>;
    getTable(_baseId: string, tableId: string, version?: number): Promise<GetTableResponse>;
    getTableV3(baseId: string, tableId: string, _version?: number): Promise<GetTableV3Response>;
    createRecord(baseId: string, tableId: string, recordInput: Record<string, unknown>, version?: number): Promise<{
        id?: string | number;
        fields: Record<string, unknown>;
    } | DataOperationResponse>;
    getRecord(baseId: string, tableId: string, recordId: number, version?: number): Promise<unknown>;
    updateRecord(baseId: string, tableId: string, recordInput: Record<string, unknown>, version?: number): Promise<{
        id?: string | number;
        fields: Record<string, unknown>;
    } | DataOperationResponse>;
    deleteRecord(baseId: string, tableId: string, recordId: number, version?: number): Promise<{
        id?: string | number;
        fields: Record<string, unknown>;
    } | DataOperationResponse>;
    listRecords(baseId: string, tableId: string, params: ListRecordsParams, version?: number): Promise<ListAPIResponse<Record<string, unknown>> | ListAPIV3Response<Record<string, unknown>>>;
}
//# sourceMappingURL=client.d.ts.map