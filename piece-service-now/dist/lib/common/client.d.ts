import { ServiceNowRecord, AttachmentMeta, EventList, WebhookSubscription, NotSupported, ServiceNowClientOptions, CatalogItem, CatalogOrderResult, JournalEntry, KnowledgeArticle, KnowledgeSearchResult, EmailSendResult } from './types';
export declare class ServiceNowClient {
    private baseURL;
    private auth;
    constructor(options: ServiceNowClientOptions);
    private getHeaders;
    private makeRequest;
    private mapError;
    getRecord(table: string, sys_id: string, options?: {
        sysparm_display_value?: 'true' | 'false' | 'all';
        sysparm_exclude_reference_link?: boolean;
        sysparm_fields?: string[];
        sysparm_query_no_domain?: boolean;
        sysparm_view?: 'desktop' | 'mobile' | 'both';
    }): Promise<ServiceNowRecord>;
    createRecord(table: string, fields: Record<string, any>, options?: {
        sysparm_display_value?: 'true' | 'false' | 'all';
        sysparm_fields?: string[];
        sysparm_input_display_value?: boolean;
        sysparm_view?: 'desktop' | 'mobile' | 'both';
    }): Promise<ServiceNowRecord>;
    updateRecord(table: string, sys_id: string, fields: Record<string, any>, options?: {
        sysparm_display_value?: 'true' | 'false' | 'all';
        sysparm_fields?: string[];
        sysparm_input_display_value?: boolean;
        sysparm_view?: 'desktop' | 'mobile' | 'both';
    }): Promise<ServiceNowRecord>;
    deleteRecord(table: string, sys_id: string): Promise<void>;
    findRecord(table: string, query: string, options?: {
        limit?: number;
        fields?: string[];
        sysparm_display_value?: 'true' | 'false' | 'all';
        sysparm_exclude_reference_link?: boolean;
        sysparm_query_no_domain?: boolean;
        sysparm_view?: 'desktop' | 'mobile' | 'both';
    }): Promise<ServiceNowRecord[]>;
    attachFile(table_name: string, table_sys_id: string, file_name: string, content_type: string, filePath?: string, fileBase64?: string, encryption_context?: string): Promise<AttachmentMeta>;
    listAttachments(table: string, sys_id: string): Promise<AttachmentMeta[]>;
    getAttachment(attachment_sys_id: string, accept_type?: string): Promise<{
        data: Buffer;
        metadata?: string;
    }>;
    pollTableEvents(table: string, since?: string, limit?: number, params?: Record<string, any>): Promise<EventList>;
    subscribeWebhook(_table: string, _callbackUrl: string, _events: string[]): Promise<WebhookSubscription | NotSupported>;
    unsubscribeWebhook(_subscriptionId: string): Promise<void | NotSupported>;
    getTables(): Promise<Array<{
        label: string;
        value: string;
    }>>;
    getRecordsForDropdown(table: string, limit?: number): Promise<Array<{
        label: string;
        value: string;
    }>>;
    deleteAttachment({ attachment_sys_id, }: {
        attachment_sys_id: string;
    }): Promise<void>;
    countRecords({ table, query, }: {
        table: string;
        query?: string;
    }): Promise<number>;
    listCatalogItems({ limit, query, }?: {
        limit?: number;
        query?: string;
    }): Promise<CatalogItem[]>;
    orderCatalogItem({ item_sys_id, quantity, variables, requested_for, }: {
        item_sys_id: string;
        quantity?: number;
        variables?: Record<string, unknown>;
        requested_for?: string;
    }): Promise<CatalogOrderResult>;
    pollJournalEntries({ table, elements, record_sys_id, limit, }: {
        table: string;
        elements: string[];
        record_sys_id?: string;
        limit?: number;
    }): Promise<JournalEntry[]>;
    getCatalogItem({ item_sys_id, }: {
        item_sys_id: string;
    }): Promise<CatalogItem>;
    searchKnowledgeArticles({ query, kb, language, limit, offset, fields, }: {
        query?: string;
        kb?: string;
        language?: string;
        limit?: number;
        offset?: number;
        fields?: string[];
    }): Promise<KnowledgeSearchResult>;
    getKnowledgeArticle({ article_sys_id, update_view, }: {
        article_sys_id: string;
        update_view?: boolean;
    }): Promise<KnowledgeArticle>;
    sendEmail({ to, subject, body, from, cc, bcc, }: {
        to: string[];
        subject: string;
        body: string;
        from?: string;
        cc?: string[];
        bcc?: string[];
    }): Promise<EmailSendResult>;
}
//# sourceMappingURL=client.d.ts.map