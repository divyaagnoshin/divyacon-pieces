import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { teamworkAuth } from './auth';
export type TeamworkRequestOptions = {
    method: HttpMethod;
    path: string;
    body?: unknown;
    query?: QueryParams;
};
export declare function teamworkRequest(auth: AppConnectionValueForAuthProperty<typeof teamworkAuth>, options: TeamworkRequestOptions): Promise<{
    success: boolean;
    data: any;
    id?: undefined;
    url?: undefined;
} | {
    success: boolean;
    id: any;
    url: any;
    data: any;
}>;
export declare function normalizeResponse(data: any): {
    success: boolean;
    data: any;
    id?: undefined;
    url?: undefined;
} | {
    success: boolean;
    id: any;
    url: any;
    data: any;
};
//# sourceMappingURL=client.d.ts.map