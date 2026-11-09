import { AppConnectionValueForAuthProperty } from "@agnocon/pieces-framework";
import { codaAuth } from '../auth';
export declare const CODA_BASE_URL = "https://coda.io/apis/v1";
export interface CodaObjectReference {
    id: string;
    type: string;
    href: string;
    name?: string;
}
export interface CodaPageReference extends CodaObjectReference {
    type: 'page';
}
export interface CodaColumnReference extends CodaObjectReference {
    type: 'column';
}
export interface CodaTableReference extends CodaObjectReference {
    type: 'table' | 'view';
    name: string;
}
export interface CodaListTablesResponse {
    items: CodaTableReference[];
    href?: string;
    nextPageToken?: string;
    nextPageLink?: string;
}
export interface CodaSort {
    column: CodaColumnReference | string;
    direction: 'ascending' | 'descending';
}
export interface CodaColumnFormat {
    type: string;
    isArray?: boolean;
}
export interface CodaTableColumn {
    id: string;
    type: "column";
    href: string;
    name: string;
    format: CodaColumnFormat;
    display?: boolean;
    calculated?: boolean;
    formula?: string;
    defaultValue?: string;
}
export interface CodaListColumnsResponse {
    items: CodaTableColumn[];
    href?: string;
    nextPageToken?: string;
    nextPageLink?: string;
}
export interface CodaGetTableDetailsResponse {
    id: string;
    type: "table";
    tableType: "table" | "view";
    href: string;
    name: string;
    parent: CodaPageReference;
    browserLink: string;
    displayColumn: CodaColumnReference;
    rowCount: number;
    sorts: CodaSort[];
    layout: string;
    createdAt: string;
    updatedAt: string;
    parentTable?: CodaTableReference;
    filter?: any;
}
export interface CodaRow {
    id: string;
    type: "row";
    href: string;
    name: string;
    index: number;
    browserLink: string;
    createdAt: string;
    updatedAt: string;
    values: Record<string, any>;
    parentTable?: CodaTableReference;
}
export interface CodaGetRowResponse extends CodaRow {
    parent: CodaTableReference;
}
export interface CodaListRowsResponse {
    items: CodaRow[];
    href?: string;
    nextPageToken?: string;
    nextPageLink?: string;
    nextSyncToken?: string;
}
export interface CodaCellEdit {
    column: string;
    value: any;
}
export interface CodaRowEdit {
    cells: CodaCellEdit[];
}
export interface CodaMutateRowsPayload {
    rows: CodaRowEdit[];
    keyColumns?: string[];
}
export interface CodaMutateRowsResponse {
    requestId: string;
    addedRowIds?: string[];
    updatedRowIds?: string[];
}
export interface CodaUpdateRowPayload {
    row: CodaRowEdit;
}
export interface CodaUpdateRowResponse {
    requestId: string;
    id: string;
}
export interface CodaDocIcon {
    name: string;
    type: string;
    browserLink: string;
}
export interface CodaDocSize {
    totalRowCount: number;
    tableAndViewCount: number;
    pageCount: number;
    overApiSizeLimit: boolean;
}
export interface CodaDocSourceDocReference {
    id: string;
    type: "doc";
    browserLink: string;
    href: string;
}
export interface CodaDocPublished {
    browserLink: string;
    discoverable: boolean;
    earnCredit: boolean;
    mode: "view" | "play" | "edit";
    categories: {
        name: string;
    }[];
    description?: string;
    imageLink?: string;
}
export interface CodaDoc {
    id: string;
    type: "doc";
    href: string;
    browserLink: string;
    name: string;
    owner: string;
    ownerName: string;
    createdAt: string;
    updatedAt: string;
    workspaceId: string;
    folderId: string;
    workspace: CodaObjectReference;
    folder: CodaObjectReference;
    icon?: CodaDocIcon;
    docSize?: CodaDocSize;
    sourceDoc?: CodaDocSourceDocReference;
    published?: CodaDocPublished;
}
export interface CodaListDocsResponse {
    items: CodaDoc[];
    href?: string;
    nextPageToken?: string;
    nextPageLink?: string;
}
export interface CodaAPIClient {
    listTables: (docId: string, params?: {
        limit?: number;
        sortBy?: string;
        tableTypes?: string;
        pageToken?: string;
    }) => Promise<CodaListTablesResponse>;
    getTableDetails: (docId: string, tableIdOrName: string, params?: {
        useUpdatedTableLayouts?: boolean;
    }) => Promise<CodaGetTableDetailsResponse>;
    listColumns: (docId: string, tableIdOrName: string, params?: {
        limit?: number;
        pageToken?: string;
        visibleOnly?: boolean;
    }) => Promise<CodaListColumnsResponse>;
    getRow: (docId: string, tableIdOrName: string, rowIdOrName: string, params?: {
        useColumnNames?: boolean;
        valueFormat?: string;
    }) => Promise<CodaGetRowResponse>;
    listRows: (docId: string, tableIdOrName: string, params?: {
        query?: string;
        sortBy?: string;
        useColumnNames?: boolean;
        valueFormat?: string;
        visibleOnly?: boolean;
        limit?: number;
        pageToken?: string;
        syncToken?: string;
    }) => Promise<CodaListRowsResponse>;
    mutateRows: (docId: string, tableIdOrName: string, payload: CodaMutateRowsPayload, params?: {
        disableParsing?: boolean;
    }) => Promise<CodaMutateRowsResponse>;
    updateRow: (docId: string, tableIdOrName: string, rowIdOrName: string, payload: CodaUpdateRowPayload, params?: {
        disableParsing?: boolean;
    }) => Promise<CodaUpdateRowResponse>;
    listDocs: (params?: {
        isOwner?: boolean;
        isPublished?: boolean;
        query?: string;
        sourceDoc?: string;
        isStarred?: boolean;
        inGallery?: boolean;
        workspaceId?: string;
        folderId?: string;
        limit?: number;
        pageToken?: string;
    }) => Promise<CodaListDocsResponse>;
}
export declare const codaClient: ({ secret_text }: AppConnectionValueForAuthProperty<typeof codaAuth>) => CodaAPIClient;
//# sourceMappingURL=types.d.ts.map