import { HttpMethod } from '@agnocon/pieces-common';
import { VercelAuthValue } from './auth';
export type VercelApiCallParams = {
    method: HttpMethod;
    path: `/${string}`;
    auth: VercelAuthValue;
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
};
export declare function vercelApiCall<TResponse>({ method, path, auth, query, body, }: VercelApiCallParams): Promise<TResponse>;
export type VercelProject = {
    id: string;
    name: string;
    framework?: string | null;
    accountId?: string;
    latestDeployments?: Array<{
        id?: string;
        url?: string;
        readyState?: string;
        state?: string;
        target?: string;
    }>;
    link?: {
        repo?: string;
        org?: string;
        repoId?: string | number;
        type?: string;
    } | null;
    updatedAt?: number;
    createdAt?: number;
};
export declare function listAllProjects(auth: VercelAuthValue, search?: string): Promise<VercelProject[]>;
export declare function toProjectDropdownOptions(projects: VercelProject[]): {
    label: string;
    value: string;
}[];
export type VercelDeployment = {
    uid: string;
    name: string;
    url: string | null;
    state?: string;
    target?: string | null;
    created: number;
};
export declare function listDeployments(auth: VercelAuthValue, projectId: string): Promise<VercelDeployment[]>;
//# sourceMappingURL=client.d.ts.map