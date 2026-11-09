import { DynamicPropsValue } from "@agnocon/pieces-framework";
import { Field, FieldType, PopulatedRecord, TableWebhookEventType } from "@agnocon/pieces-framework";
import * as z from 'zod/mini';
type FormattedRecord = {
    id: string;
    created: string;
    updated: string;
    cells: Record<string, {
        fieldName: string;
        updated: string;
        created: string;
        value: unknown;
    }>;
};
export declare const tablesCommon: {
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
    record_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    getTableFields({ tableId, context }: {
        tableId: string;
        context: {
            server: {
                apiUrl: string;
                token: string;
            };
        };
    }): Promise<({
        name: string;
        externalId: string;
        type: FieldType.STATIC_DROPDOWN;
        tableId: string;
        projectId: string;
        data: {
            options: {
                value: string;
            }[];
        };
        id: string;
        created: string;
        updated: string;
    } | {
        name: string;
        externalId: string;
        type: FieldType.TEXT | FieldType.NUMBER | FieldType.DATE;
        tableId: string;
        projectId: string;
        id: string;
        created: string;
        updated: string;
    })[]>;
    createFieldValidations(tableFields: Field[]): Record<string, z.z.core.$ZodType<unknown, unknown, z.z.core.$ZodTypeInternals<unknown, unknown>>>;
    createFieldProperties({ tableId, context }: {
        tableId: string;
        context: {
            server: {
                apiUrl: string;
                token: string;
            };
        };
    }): Promise<DynamicPropsValue>;
    createWebhook({ tableId, events, webhookUrl, flowId, server, }: {
        tableId: string;
        events: TableWebhookEventType[];
        webhookUrl: string;
        flowId: string;
        server: {
            apiUrl: string;
            token: string;
        };
    }): Promise<any>;
    deleteWebhook({ tableId, webhookId, server, }: {
        tableId: string;
        webhookId: string;
        server: {
            apiUrl: string;
            token: string;
        };
    }): Promise<any>;
    getRecentRecords({ tableId, limit, context }: {
        tableId: string;
        limit?: number;
        context: {
            server: {
                apiUrl: string;
                token: string;
            };
        };
    }): Promise<any>;
    formatRecord(record: PopulatedRecord | {
        record: PopulatedRecord;
    }): FormattedRecord;
    convertTableExternalIdToId(tableId: string, context: {
        server: {
            apiUrl: string;
            token: string;
        };
        project: {
            id: string;
        };
    }): Promise<string>;
};
export {};
//# sourceMappingURL=index.d.ts.map