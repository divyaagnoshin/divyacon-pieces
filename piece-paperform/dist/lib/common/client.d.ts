import { HttpMethod } from '@agnocon/pieces-common';
import { PaperformFormsResponse, PaperformWebhookResponse, PaperformSubmissionsResponse, PaperformPartialSubmissionsResponse, PaperformCouponsResponse, PaperformFieldsResponse, PaperformProductsResponse, PaperformSpacesResponse, PaperformField, PaperformSubmission } from './types';
export declare const paperformCommon: {
    baseUrl: string;
    apiCall<T>({ method, url, body, auth, headers, }: {
        method: HttpMethod;
        url: string;
        body?: any;
        auth: string | {
            apiKey: string;
        };
        headers?: Record<string, string>;
    }): Promise<T>;
    getSpaces({ auth, search, limit, skip, afterId, beforeId, beforeDate, afterDate, sort, }: {
        auth: string | {
            apiKey: string;
        };
        search?: string;
        limit?: number;
        skip?: number;
        afterId?: string;
        beforeId?: string;
        beforeDate?: string;
        afterDate?: string;
        sort?: string;
    }): Promise<PaperformSpacesResponse>;
    getForms({ auth, search, limit, skip, afterId, beforeId, beforeDate, afterDate, sort, }: {
        auth: string | {
            apiKey: string;
        };
        search?: string;
        limit?: number;
        skip?: number;
        afterId?: string;
        beforeId?: string;
        beforeDate?: string;
        afterDate?: string;
        sort?: string;
    }): Promise<PaperformFormsResponse>;
    getForm({ formId, auth, }: {
        formId: string;
        auth: string | {
            apiKey: string;
        };
    }): Promise<unknown>;
    getFormFields({ formSlugOrId, auth, search, }: {
        formSlugOrId: string;
        auth: string | {
            apiKey: string;
        };
        search?: string;
    }): Promise<PaperformFieldsResponse>;
    getSubmissions({ formId, auth, limit, skip, }: {
        formId: string;
        auth: string | {
            apiKey: string;
        };
        limit?: number;
        skip?: number;
    }): Promise<PaperformSubmissionsResponse>;
    getPartialSubmissions({ formSlugOrId, auth, limit, skip, }: {
        formSlugOrId: string;
        auth: string | {
            apiKey: string;
        };
        limit?: number;
        skip?: number;
    }): Promise<PaperformPartialSubmissionsResponse>;
    getCoupons({ formSlugOrId, auth, limit, skip, }: {
        formSlugOrId: string;
        auth: string | {
            apiKey: string;
        };
        limit?: number;
        skip?: number;
    }): Promise<PaperformCouponsResponse>;
    getProducts({ formSlugOrId, auth, search, limit, skip, }: {
        formSlugOrId: string;
        auth: string | {
            apiKey: string;
        };
        search?: string;
        limit?: number;
        skip?: number;
    }): Promise<PaperformProductsResponse>;
    getSubmission({ submissionId, auth, }: {
        submissionId: string;
        auth: string | {
            apiKey: string;
        };
    }): Promise<{
        results: {
            submission: PaperformSubmission;
        };
    }>;
    getPartialSubmission({ submissionId, auth, }: {
        submissionId: string;
        auth: string | {
            apiKey: string;
        };
    }): Promise<{
        results: {
            "partial-submission": PaperformSubmission;
        };
    }>;
    createWebhook({ formId, webhookUrl, auth, eventType, }: {
        formId: string;
        webhookUrl: string;
        auth: string | {
            apiKey: string;
        };
        eventType: string;
    }): Promise<PaperformWebhookResponse>;
    deleteWebhook({ webhookId, auth, }: {
        webhookId: string;
        auth: string | {
            apiKey: string;
        };
    }): Promise<unknown>;
    transformSubmissionData(formFields: PaperformField[], submissionFields: Record<string, any>): Record<string, any>;
};
//# sourceMappingURL=client.d.ts.map