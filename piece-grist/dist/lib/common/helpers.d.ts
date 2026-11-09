import { DynamicPropsValue } from '@agnocon/pieces-framework';
import { GristAPIClientOptions, GristCreateRecordsRequest, GristCreateRecordsResponse, GristCreateWebhookRequest, GristCreateWebhookResponse, GristListRecordsResponse, GristOrgResponse, GristTableColumnsResponse, GristTableResponse, GristUpdateRecordsRequest, GristWorkspaceResponse } from './types';
import { HttpHeaders, HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
type Query = Record<string, string | number | string[] | undefined>;
export declare class GristAPIClient {
    #private;
    constructor(options: GristAPIClientOptions);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, headers?: HttpHeaders, query?: Query, body?: any | undefined): Promise<T>;
    listOrgs(): Promise<GristOrgResponse[]>;
    listWorkspaces(orgId: string): Promise<GristWorkspaceResponse[]>;
    getWorkspace(workspaceId: number): Promise<GristWorkspaceResponse>;
    listDocumentTables(docId: string): Promise<{
        tables: GristTableResponse[];
    }>;
    listTableColumns(docId: string, tableId: string): Promise<{
        columns: GristTableColumnsResponse[];
    }>;
    addRecordsToTable(docId: string, tableId: string, request: GristCreateRecordsRequest): Promise<GristCreateRecordsResponse>;
    updateRcordsInTable(docId: string, tableId: string, request: GristUpdateRecordsRequest): Promise<GristCreateRecordsResponse>;
    listRecordsFromTable(docId: string, tableId: string, query: Query): Promise<GristListRecordsResponse>;
    listDocumentAttachments(docId: string, query: Query): Promise<GristListRecordsResponse>;
    getDocumentAttachmentMetadata(docId: string, attachmentId: number): Promise<GristListRecordsResponse>;
    createDocumentWebhook(docId: string, request: GristCreateWebhookRequest): Promise<GristCreateWebhookResponse>;
    deleteDocumentWebhook(docId: string, webhookId: number): Promise<unknown>;
}
export declare function transformTableColumnValues({ tableColumnSchema, tableColumnValues, }: {
    tableColumnSchema: {
        columns: GristTableColumnsResponse[];
    };
    tableColumnValues: DynamicPropsValue;
}): DynamicPropsValue;
export {};
//# sourceMappingURL=helpers.d.ts.map