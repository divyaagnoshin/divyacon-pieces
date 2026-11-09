import { HttpMethod } from '@agnocon/pieces-common';
import { folkAuth } from './auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const folkClient: {
    baseUrl: string;
    testConnection(apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>): Promise<void>;
    makeRequest<T>({ method, url, apiKey, body, headers, }: {
        method: HttpMethod;
        url: string;
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        body?: any;
        headers?: Record<string, string>;
    }): Promise<T>;
    getPeople({ apiKey, limit, offset, }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        limit?: number;
        offset?: number;
    }): Promise<{
        people: any[];
    }>;
    getPeopleWithFilters({ apiKey, limit, cursor, combinator, nameFilter, emailFilter, }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        limit?: number;
        cursor?: string;
        combinator?: "and" | "or";
        nameFilter?: string;
        emailFilter?: string;
    }): Promise<{
        data: {
            items: any[];
            pagination: {
                nextLink?: string;
            };
        };
    }>;
    getPerson({ apiKey, contactId, }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        contactId: string;
    }): Promise<{
        data: any;
    }>;
    searchPerson({ apiKey, query }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        query: string;
    }): Promise<{
        people: any[];
    }>;
    createPerson({ apiKey, data }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        data: any;
    }): Promise<{
        data: any;
    }>;
    updatePerson({ apiKey, contactId, data, }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        contactId: string;
        data: any;
    }): Promise<{
        data: any;
    }>;
    getCompanies({ apiKey, limit, offset, }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        limit?: number;
        offset?: number;
    }): Promise<{
        companies: any[];
    }>;
    getCompaniesWithFilters({ apiKey, limit, cursor, combinator, nameFilter }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        limit?: number;
        cursor?: string;
        combinator?: "and" | "or";
        nameFilter?: string;
    }): Promise<{
        data: {
            items: any[];
            pagination: {
                nextLink?: string;
            };
        };
    }>;
    getCompany({ apiKey, companyId, }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        companyId: string;
    }): Promise<{
        data: any;
    }>;
    searchCompany({ apiKey, query }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        query: string;
    }): Promise<{
        data: {
            items: any[];
            pagination: {
                nextLink: string;
            };
        };
    }>;
    createCompany({ apiKey, data }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        data: any;
    }): Promise<{
        data: any;
    }>;
    updateCompany({ apiKey, companyId, data, }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        companyId: string;
        data: any;
    }): Promise<{
        data: any;
    }>;
    getGroups({ apiKey }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
    }): Promise<{
        data: {
            items: any[];
            pagination: {
                nextLink?: string;
            };
        };
    }>;
    createWebhook({ apiKey, name, targetUrl, subscribedEvents, }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        name: string;
        targetUrl: string;
        subscribedEvents: Array<{
            eventType: string;
            filter?: {
                groupId?: string;
                objectType?: string;
                path?: string[];
                value?: string;
            };
        }>;
    }): Promise<{
        data: {
            id: string;
            name: string;
            targetUrl: string;
            subscribedEvents: Array<{
                eventType: string;
                filter: Record<string, any>;
            }>;
            signingSecret: string;
            status: string;
            createdAt: string;
        };
    }>;
    deleteWebhook({ apiKey, webhookId }: {
        apiKey: AppConnectionValueForAuthProperty<typeof folkAuth>;
        webhookId: string;
    }): Promise<void>;
};
//# sourceMappingURL=client.d.ts.map