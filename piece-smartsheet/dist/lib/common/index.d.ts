export declare const smartsheetCommon: {
    baseUrl: string;
    sheet_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    column_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    cells: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    row_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    hyperlink_sheet_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    hyperlink_report_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    search_columns: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export interface SmartsheetSheet {
    id: number;
    name: string;
    accessLevel: string;
    permalink: string;
    createdAt: string;
    modifiedAt: string;
}
export interface SmartsheetColumn {
    id: number;
    index: number;
    title: string;
    type?: string;
    primary?: boolean;
    options?: string[];
    validation?: boolean;
    width?: number;
    hidden?: boolean;
    locked?: boolean;
    lockedForUser?: boolean;
}
export interface SmartsheetRow {
    id: number;
    rowNumber: number;
    siblingId?: number;
    expanded?: boolean;
    createdAt: string;
    modifiedAt: string;
    cells: SmartsheetCell[];
}
export interface SmartsheetCell {
    columnId: number;
    value?: any;
    displayValue?: string;
    formula?: string;
}
export interface SmartsheetAttachment {
    id: number;
    name: string;
    url: string;
    attachmentType: string;
    createdAt: string;
    createdBy: {
        name: string;
        email: string;
    };
}
export interface SmartsheetComment {
    id: number;
    text: string;
    createdAt: string;
    createdBy: {
        name: string;
        email: string;
    };
}
export interface SmartsheetReport {
    id: number;
    name: string;
    accessLevel: 'ADMIN' | 'COMMENTER' | 'EDITOR' | 'EDITOR_SHARE' | 'OWNER' | 'VIEWER';
    isSummaryReport: boolean;
    ownerId: number;
    createdAt: string;
    modifiedAt: string;
    permalink: string;
    owner?: string;
    totalRowCount?: number;
    version?: number;
}
export interface SmartsheetReportsResponse {
    pageNumber: number;
    pageSize: number | null;
    totalPages: number;
    totalCount: number;
    data: SmartsheetReport[];
}
export declare function listSheets(accessToken: string): Promise<SmartsheetSheet[]>;
export declare function getSheet(accessToken: string, sheetId: string): Promise<any>;
export declare function getSheetColumns(accessToken: string, sheetId: string): Promise<SmartsheetColumn[]>;
export declare function addRowToSmartsheet(accessToken: string, sheetId: string, rowData: any, queryParams?: any): Promise<SmartsheetRow>;
export declare function updateRowInSmartsheet(accessToken: string, sheetId: string, rowData: any, queryParams?: any): Promise<SmartsheetRow>;
export declare function getRowAttachments(accessToken: string, sheetId: string, rowId: string): Promise<SmartsheetAttachment[]>;
export declare function findSheetsByName(accessToken: string, name: string): Promise<SmartsheetSheet[]>;
export declare function listReports(accessToken: string, modifiedSince?: string): Promise<SmartsheetReport[]>;
export interface SmartsheetWebhook {
    id: number;
    name: string;
    callbackUrl: string;
    scope: string;
    scopeObjectId: number;
    events: string[];
    enabled: boolean;
    status: string;
    sharedSecret: string;
}
export declare function subscribeWebhook(accessToken: string, webhookUrl: string, sheetId: string, webhookName: string): Promise<SmartsheetWebhook>;
export declare function enableWebhook(accessToken: string, webhookId: string): Promise<SmartsheetWebhook>;
export declare function unsubscribeWebhook(accessToken: string, webhookId: string): Promise<void>;
export declare function listWebhooks(accessToken: string): Promise<SmartsheetWebhook[]>;
export interface WebhookInformation {
    webhookId: string;
    sharedSecret: string;
    webhookName: string;
}
export declare function findOrCreateWebhook(accessToken: string, webhookUrl: string, sheetId: string, triggerIdentifier: string): Promise<SmartsheetWebhook>;
export declare function verifyWebhookSignature(webhookSecret?: string, webhookSignatureHeader?: string, webhookRawBody?: any): boolean;
export declare function getSheetRowDetails(accessToken: string, sheetId: string, rowId: string): Promise<SmartsheetRow | null>;
export declare function getAttachmentFullDetails(accessToken: string, sheetId: string, attachmentId: string): Promise<SmartsheetAttachment | null>;
export declare function getCommentFullDetails(accessToken: string, sheetId: string, discussionId: string, commentId: string): Promise<SmartsheetComment | null>;
//# sourceMappingURL=index.d.ts.map