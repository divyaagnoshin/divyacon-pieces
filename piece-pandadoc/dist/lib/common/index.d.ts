import { HttpMethod } from '@agnocon/pieces-common';
export declare const pandadocClient: {
    makeRequest<T = any>(auth: string, method: HttpMethod, endpoint: string, body?: any): Promise<T>;
    makeFileRequest(auth: string, method: HttpMethod, endpoint: string, file?: any): Promise<any>;
};
export * from './auth';
//# sourceMappingURL=index.d.ts.map