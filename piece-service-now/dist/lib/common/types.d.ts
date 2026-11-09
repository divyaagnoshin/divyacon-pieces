import { z } from 'zod';
export declare const ServiceNowRecordSchema: z.ZodRecord<z.ZodString, z.ZodAny>;
export type ServiceNowRecord = z.infer<typeof ServiceNowRecordSchema>;
export declare const AttachmentMetaSchema: z.ZodObject<{
    sys_id: z.ZodString;
    file_name: z.ZodString;
    content_type: z.ZodString;
    size_bytes: z.ZodString;
    table_name: z.ZodString;
    table_sys_id: z.ZodString;
    download_link: z.ZodString;
    average_image_color: z.ZodOptional<z.ZodString>;
    compressed: z.ZodOptional<z.ZodString>;
    created_by_name: z.ZodOptional<z.ZodString>;
    image_height: z.ZodOptional<z.ZodString>;
    image_width: z.ZodOptional<z.ZodString>;
    size_compressed: z.ZodOptional<z.ZodString>;
    sys_created_by: z.ZodOptional<z.ZodString>;
    sys_created_on: z.ZodOptional<z.ZodString>;
    sys_mod_count: z.ZodOptional<z.ZodString>;
    sys_tags: z.ZodOptional<z.ZodString>;
    sys_updated_by: z.ZodOptional<z.ZodString>;
    sys_updated_on: z.ZodOptional<z.ZodString>;
    updated_by_name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sys_id: string;
    file_name: string;
    content_type: string;
    size_bytes: string;
    table_name: string;
    table_sys_id: string;
    download_link: string;
    average_image_color?: string | undefined;
    compressed?: string | undefined;
    created_by_name?: string | undefined;
    image_height?: string | undefined;
    image_width?: string | undefined;
    size_compressed?: string | undefined;
    sys_created_by?: string | undefined;
    sys_created_on?: string | undefined;
    sys_mod_count?: string | undefined;
    sys_tags?: string | undefined;
    sys_updated_by?: string | undefined;
    sys_updated_on?: string | undefined;
    updated_by_name?: string | undefined;
}, {
    sys_id: string;
    file_name: string;
    content_type: string;
    size_bytes: string;
    table_name: string;
    table_sys_id: string;
    download_link: string;
    average_image_color?: string | undefined;
    compressed?: string | undefined;
    created_by_name?: string | undefined;
    image_height?: string | undefined;
    image_width?: string | undefined;
    size_compressed?: string | undefined;
    sys_created_by?: string | undefined;
    sys_created_on?: string | undefined;
    sys_mod_count?: string | undefined;
    sys_tags?: string | undefined;
    sys_updated_by?: string | undefined;
    sys_updated_on?: string | undefined;
    updated_by_name?: string | undefined;
}>;
export type AttachmentMeta = z.infer<typeof AttachmentMetaSchema>;
export declare const TriggerEventSchema: z.ZodObject<{
    eventId: z.ZodString;
    table: z.ZodString;
    sys_id: z.ZodString;
    operation: z.ZodEnum<["create", "update", "delete"]>;
    fields: z.ZodRecord<z.ZodString, z.ZodAny>;
    timestamp: z.ZodString;
    raw: z.ZodRecord<z.ZodString, z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    sys_id: string;
    eventId: string;
    table: string;
    operation: "create" | "update" | "delete";
    fields: Record<string, any>;
    timestamp: string;
    raw: Record<string, any>;
}, {
    sys_id: string;
    eventId: string;
    table: string;
    operation: "create" | "update" | "delete";
    fields: Record<string, any>;
    timestamp: string;
    raw: Record<string, any>;
}>;
export type TriggerEvent = z.infer<typeof TriggerEventSchema>;
export declare const EventListSchema: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        eventId: z.ZodString;
        table: z.ZodString;
        sys_id: z.ZodString;
        operation: z.ZodEnum<["create", "update", "delete"]>;
        fields: z.ZodRecord<z.ZodString, z.ZodAny>;
        timestamp: z.ZodString;
        raw: z.ZodRecord<z.ZodString, z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        sys_id: string;
        eventId: string;
        table: string;
        operation: "create" | "update" | "delete";
        fields: Record<string, any>;
        timestamp: string;
        raw: Record<string, any>;
    }, {
        sys_id: string;
        eventId: string;
        table: string;
        operation: "create" | "update" | "delete";
        fields: Record<string, any>;
        timestamp: string;
        raw: Record<string, any>;
    }>, "many">;
    hasMore: z.ZodBoolean;
    nextCursor: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    events: {
        sys_id: string;
        eventId: string;
        table: string;
        operation: "create" | "update" | "delete";
        fields: Record<string, any>;
        timestamp: string;
        raw: Record<string, any>;
    }[];
    hasMore: boolean;
    nextCursor?: string | undefined;
}, {
    events: {
        sys_id: string;
        eventId: string;
        table: string;
        operation: "create" | "update" | "delete";
        fields: Record<string, any>;
        timestamp: string;
        raw: Record<string, any>;
    }[];
    hasMore: boolean;
    nextCursor?: string | undefined;
}>;
export type EventList = z.infer<typeof EventListSchema>;
export declare const WebhookSubscriptionSchema: z.ZodObject<{
    id: z.ZodString;
    table: z.ZodString;
    callbackUrl: z.ZodString;
    events: z.ZodArray<z.ZodString, "many">;
    active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    table: string;
    events: string[];
    id: string;
    callbackUrl: string;
    active: boolean;
}, {
    table: string;
    events: string[];
    id: string;
    callbackUrl: string;
    active: boolean;
}>;
export type WebhookSubscription = z.infer<typeof WebhookSubscriptionSchema>;
export declare const CatalogItemSchema: z.ZodObject<{
    sys_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    short_description: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodString>;
    recurring_price: z.ZodOptional<z.ZodString>;
    picture: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sys_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    short_description: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodString>;
    recurring_price: z.ZodOptional<z.ZodString>;
    picture: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sys_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    short_description: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodString>;
    recurring_price: z.ZodOptional<z.ZodString>;
    picture: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type CatalogItem = z.infer<typeof CatalogItemSchema>;
export declare const CatalogOrderResultSchema: z.ZodObject<{
    sys_id: z.ZodOptional<z.ZodString>;
    request_number: z.ZodOptional<z.ZodString>;
    request_id: z.ZodOptional<z.ZodString>;
    table: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sys_id: z.ZodOptional<z.ZodString>;
    request_number: z.ZodOptional<z.ZodString>;
    request_id: z.ZodOptional<z.ZodString>;
    table: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sys_id: z.ZodOptional<z.ZodString>;
    request_number: z.ZodOptional<z.ZodString>;
    request_id: z.ZodOptional<z.ZodString>;
    table: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type CatalogOrderResult = z.infer<typeof CatalogOrderResultSchema>;
export declare const JournalEntrySchema: z.ZodObject<{
    sys_id: z.ZodString;
    element: z.ZodString;
    element_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    sys_created_by: z.ZodOptional<z.ZodString>;
    sys_created_on: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sys_id: z.ZodString;
    element: z.ZodString;
    element_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    sys_created_by: z.ZodOptional<z.ZodString>;
    sys_created_on: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sys_id: z.ZodString;
    element: z.ZodString;
    element_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    sys_created_by: z.ZodOptional<z.ZodString>;
    sys_created_on: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type JournalEntry = z.infer<typeof JournalEntrySchema>;
export declare const KnowledgeArticleSchema: z.ZodObject<{
    sys_id: z.ZodOptional<z.ZodString>;
    number: z.ZodOptional<z.ZodString>;
    short_description: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    workflow_state: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    link: z.ZodOptional<z.ZodString>;
    kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sys_id: z.ZodOptional<z.ZodString>;
    number: z.ZodOptional<z.ZodString>;
    short_description: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    workflow_state: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    link: z.ZodOptional<z.ZodString>;
    kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sys_id: z.ZodOptional<z.ZodString>;
    number: z.ZodOptional<z.ZodString>;
    short_description: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    workflow_state: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    link: z.ZodOptional<z.ZodString>;
    kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, z.ZodTypeAny, "passthrough">>;
export type KnowledgeArticle = z.infer<typeof KnowledgeArticleSchema>;
export declare const KnowledgeSearchResultSchema: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    result: z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        articles: z.ZodDefault<z.ZodArray<z.ZodObject<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "strip", z.ZodTypeAny, {
        articles: z.objectOutputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">[];
        meta?: Record<string, any> | undefined;
    }, {
        meta?: Record<string, any> | undefined;
        articles?: z.objectInputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    result: z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        articles: z.ZodDefault<z.ZodArray<z.ZodObject<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "strip", z.ZodTypeAny, {
        articles: z.objectOutputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">[];
        meta?: Record<string, any> | undefined;
    }, {
        meta?: Record<string, any> | undefined;
        articles?: z.objectInputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    result: z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        articles: z.ZodDefault<z.ZodArray<z.ZodObject<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "strip", z.ZodTypeAny, {
        articles: z.objectOutputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">[];
        meta?: Record<string, any> | undefined;
    }, {
        meta?: Record<string, any> | undefined;
        articles?: z.objectInputType<{
            sys_id: z.ZodOptional<z.ZodString>;
            number: z.ZodOptional<z.ZodString>;
            short_description: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            workflow_state: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            link: z.ZodOptional<z.ZodString>;
            kb_knowledge_base: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
            kb_category: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
        }, z.ZodTypeAny, "passthrough">[] | undefined;
    }>;
}, z.ZodTypeAny, "passthrough">>;
export type KnowledgeSearchResult = z.infer<typeof KnowledgeSearchResultSchema>;
export declare const EmailSendResultSchema: z.ZodObject<{
    sys_id: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sys_id: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sys_id: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type EmailSendResult = z.infer<typeof EmailSendResultSchema>;
export declare class NotSupported extends Error {
    constructor(message: string);
}
export interface AuthConfig {
    type: 'basic' | 'bearer';
    username?: string;
    password?: string;
    token?: string;
}
export interface ServiceNowClientOptions {
    instanceUrl: string;
    auth: AuthConfig;
    apiVersion?: string;
}
//# sourceMappingURL=types.d.ts.map