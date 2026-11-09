import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { fireberryAuth } from '../auth';
export declare class FireberryClient {
    private apiKey;
    constructor(apiKey: AppConnectionValueForAuthProperty<typeof fireberryAuth>);
    private parseError;
    private shouldRetry;
    request<T = unknown>({ method, resourceUri, body, queryParams, }: {
        method: HttpMethod;
        resourceUri: string;
        body?: unknown;
        queryParams?: Record<string, string | number | boolean>;
    }): Promise<T>;
    getObjectsMetadata(): Promise<{
        success: boolean;
        data: Array<{
            name: string;
            systemName: string;
            objectType: string;
        }>;
    }>;
    getObjectFieldsMetadata(object: string): Promise<{
        success: boolean;
        data: Array<{
            label: string;
            fieldName: string;
            systemFieldTypeId: string;
            systemName: string;
        }>;
    }>;
    getPicklistValues(object: string, fieldName: string): Promise<{
        success: boolean;
        data: {
            values: Array<{
                name: string;
                value: string;
            }>;
        };
    }>;
    batchCreate(object: string, records: any[]): Promise<any>;
    batchUpdate(object: string, records: any[]): Promise<any>;
    batchDelete(object: string, ids: string[]): Promise<any>;
}
//# sourceMappingURL=client.d.ts.map