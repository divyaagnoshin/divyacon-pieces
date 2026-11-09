import { HttpMethod } from '@agnocon/pieces-common';
export interface MyCaseAuth {
    access_token: string;
    token_type: string;
    refresh_token?: string;
    expires_in?: number;
    firm_uuid?: string;
}
export interface MyCaseApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    details?: any;
}
export declare class MyCaseApi {
    private auth;
    private baseUrl;
    constructor(auth: MyCaseAuth);
    makeRequest<T = any>(method: HttpMethod, endpoint: string, body?: any, queryParams?: Record<string, string>): Promise<MyCaseApiResponse<T>>;
    get<T = any>(endpoint: string, queryParams?: Record<string, string>): Promise<MyCaseApiResponse<T>>;
    post<T = any>(endpoint: string, body?: any): Promise<MyCaseApiResponse<T>>;
    put<T = any>(endpoint: string, body?: any): Promise<MyCaseApiResponse<T>>;
    delete<T = any>(endpoint: string): Promise<MyCaseApiResponse<T>>;
}
export declare function createMyCaseApi(auth: any): MyCaseApi;
//# sourceMappingURL=mycase-api.d.ts.map