import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class TeableClient {
    private token;
    private readonly apiBase;
    constructor(token: string, teableUrl?: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: QueryParams, body?: any | undefined): Promise<T>;
    /**
     * GET /api/base/access/all
     * Returns all bases the token has access to.
     * @see https://help.teable.ai/en/api-reference/base/get-baseaccessall
     */
    listBases(): Promise<{
        id: string;
        name: string;
        spaceId: string;
        icon: string | null;
        role: string;
    }[]>;
    /**
     * GET /api/base/{baseId}/table
     * Returns all tables in the given base.
     * @see https://help.teable.ai/en/api-reference/table/list-tables
     */
    listTables(baseId: string): Promise<{
        id: string;
        name: string;
        dbTableName: string;
        description?: string;
        icon?: string;
        order: number;
        defaultViewId?: string;
    }[]>;
    /**
     * GET /api/table/{tableId}/field
     * Returns all fields in the given table.
     * @see https://help.teable.ai/en/api-reference/field/list-fields
     */
    listFields(tableId: string): Promise<{
        id: string;
        name: string;
        type: string;
        isComputed?: boolean;
        isPrimary?: boolean;
        options?: {
            choices?: {
                id: string;
                name: string;
                color?: string;
            }[];
            [key: string]: unknown;
        };
    }[]>;
    /**
     * GET /api/table/{tableId}/record/{recordId}
     * Retrieves a single record by its ID.
     * @see https://help.teable.ai/en/api-reference/record/get-record
     */
    getRecord(tableId: string, recordId: string, query?: QueryParams): Promise<{
        id: string;
        fields: Record<string, unknown>;
        name: string;
        autoNumber: number;
        createdTime: string;
        lastModifiedTime: string;
        createdBy: string;
        lastModifiedBy: string;
        permissions: Record<string, unknown>;
    }>;
    /**
     * GET /api/table/{tableId}/record
     * Retrieves a list of records with support for filtering, sorting, and pagination.
     * @see https://help.teable.ai/en/api-reference/record/list-records
     */
    listRecords(tableId: string, query?: QueryParams): Promise<{
        records: {
            id: string;
            fields: Record<string, unknown>;
        }[];
    }>;
    /**
     * POST /api/table/{tableId}/record
     * Creates one or more records.
     */
    createRecord(tableId: string, request: object): Promise<unknown>;
    /**
     * DELETE /api/table/{tableId}/record/{recordId}
     * Deletes a single record.
     */
    deleteRecord(tableId: string, recordId: string): Promise<unknown>;
    /**
     * PATCH /api/table/{tableId}/record/{recordId}
     * Updates a single record.
     */
    updateRecord(tableId: string, recordId: string, request: object): Promise<unknown>;
    /**
     * POST /api/table/{tableId}/record/{recordId}/{fieldId}/uploadAttachment
     * Uploads a file as an attachment to a specific field in a record.
     */
    uploadAttachment(tableId: string, recordId: string, fieldId: string, form: FormData): Promise<any>;
}
//# sourceMappingURL=client.d.ts.map