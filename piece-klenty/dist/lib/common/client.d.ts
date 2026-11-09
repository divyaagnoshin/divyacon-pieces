import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { klentyAuth } from '../auth';
export type KlentyAuthValue = AppConnectionValueForAuthProperty<typeof klentyAuth>;
export type KlentyProspect = {
    Email?: string;
    FirstName?: string;
    LastName?: string;
    Company?: string;
    List?: string;
    [key: string]: unknown;
};
export declare function getKlentyBaseUrl(username: string): string;
export declare function klentyRequest<T = unknown>({ auth, method, path, queryParams, body, }: {
    auth: KlentyAuthValue;
    method: HttpMethod;
    path: string;
    queryParams?: QueryParams;
    body?: unknown;
}): Promise<T>;
export declare function findKlentyProspectByEmail({ auth, email, }: {
    auth: KlentyAuthValue;
    email: string;
}): Promise<KlentyProspect | null>;
//# sourceMappingURL=client.d.ts.map