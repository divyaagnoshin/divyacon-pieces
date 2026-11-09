import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { fragmentAuth } from './auth';
export declare const BASE_URL = "https://api.onfragment.com/api/v1";
export interface FragmentTask {
    uid?: string;
    title: string;
    url?: string;
    due_at?: string;
    priority?: 'low' | 'medium' | 'high' | 'urgent';
    status?: 'open' | 'completed' | 'cancelled';
    assignee?: string;
    tags?: string[];
    custom_fields?: Record<string, any>;
    created_at?: string;
    updated_at?: string;
    [key: string]: any;
}
export declare const fragmentClient: {
    makeRequest<T extends unknown = any>(method: HttpMethod, path: string, apiKey: AppConnectionValueForAuthProperty<typeof fragmentAuth>, body?: any, queryParams?: Record<string, string>): Promise<T>;
};
//# sourceMappingURL=client.d.ts.map