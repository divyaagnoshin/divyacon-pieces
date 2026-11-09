import { AirtableBase, AirtableComment, AirtableCreateBaseResponse, AirtableTableConfig, AirtableFieldConfig, AirtableRecord, AirtableTable, AirtableView } from './models';
interface Params {
    personalToken: string;
    baseId: string;
    tableId: string;
    fields?: Record<string, unknown>;
    recordId?: string;
    searchValue?: string;
    searchField?: string;
    fieldNames?: string[];
    limitToView?: string;
    sortField?: string;
    text?: string;
    parentCommentId?: string;
    workspaceId?: string;
    name?: string;
    tables?: AirtableTableConfig[];
}
declare function fetchAllBases({ token, }: {
    token: string;
}): Promise<AirtableBase[]>;
declare function fetchBase({ token, baseId, }: {
    token: string;
    baseId: string;
}): Promise<AirtableBase>;
declare function listRecords({ token, baseId, tableId, pageSize, }: {
    token: string;
    baseId: string;
    tableId: string;
    pageSize?: number;
}): Promise<AirtableRecord[]>;
declare function fetchTableList({ token, baseId, }: {
    token: string;
    baseId: string;
}): Promise<AirtableTable[]>;
declare function fetchTable({ token, baseId, tableId, }: {
    token: string;
    baseId: string;
    tableId: string;
}): Promise<AirtableTable>;
declare function fetchViews({ token, baseId, tableId, }: {
    token: string;
    baseId: string;
    tableId: string;
}): Promise<AirtableView[]>;
declare function createRecord({ personalToken: token, fields, tableId, baseId, }: Params): Promise<AirtableRecord | import("@agnocon/pieces-common").HttpResponse<AirtableRecord>>;
declare function findRecord({ personalToken: token, searchField, searchValue, tableId, baseId, limitToView, }: Params): Promise<AirtableRecord[]>;
declare function updateRecord({ personalToken: token, fields, recordId, tableId, baseId, }: Params): Promise<AirtableRecord | import("@agnocon/pieces-common").HttpResponse<AirtableRecord>>;
declare function deleteRecord({ personalToken: token, recordId, tableId, baseId, }: Params): Promise<AirtableRecord | import("@agnocon/pieces-common").HttpResponse<AirtableRecord>>;
declare function getRecordById({ personalToken: token, baseId, tableId, recordId, }: Params): Promise<AirtableRecord | import("@agnocon/pieces-common").HttpResponse<AirtableRecord>>;
declare function addCommentToRecord({ personalToken: token, baseId, tableId, recordId, text, parentCommentId, }: Params): Promise<AirtableComment | import("@agnocon/pieces-common").HttpResponse<AirtableComment>>;
declare function createBase({ personalToken: token, workspaceId, name, tables, }: {
    personalToken: string;
    workspaceId: string;
    name: string;
    tables: AirtableTableConfig[];
}): Promise<AirtableCreateBaseResponse | import("@agnocon/pieces-common").HttpResponse<AirtableCreateBaseResponse>>;
declare function createTable({ personalToken: token, baseId, name, description, fields, }: {
    personalToken: string;
    baseId: string;
    name: string;
    description?: string;
    fields: AirtableFieldConfig[];
}): Promise<AirtableTable | import("@agnocon/pieces-common").HttpResponse<AirtableTable>>;
export declare const airtableCommon: {
    base: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tableId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    views: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    recordId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    recordIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    fieldNames: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    createNewFields: (auth: string, base: string, tableId: string, fields: Record<string, unknown>, allowEmpty?: boolean) => Promise<Record<string, unknown>>;
    getTableSnapshot: (params: Params) => Promise<any[]>;
    createRecord: typeof createRecord;
    findRecord: typeof findRecord;
    updateRecord: typeof updateRecord;
    deleteRecord: typeof deleteRecord;
    getRecordById: typeof getRecordById;
    fetchAllBases: typeof fetchAllBases;
    fetchTableList: typeof fetchTableList;
    fetchTable: typeof fetchTable;
    fetchViews: typeof fetchViews;
    addCommentToRecord: typeof addCommentToRecord;
    createBase: typeof createBase;
    createTable: typeof createTable;
    listRecords: typeof listRecords;
    fetchBase: typeof fetchBase;
};
export {};
//# sourceMappingURL=index.d.ts.map