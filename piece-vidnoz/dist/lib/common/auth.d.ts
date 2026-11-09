import { AuthenticationType, HttpRequest } from '@agnocon/pieces-common';
export declare const vidnozAuth: (auth: string) => {
    type: AuthenticationType.BEARER_TOKEN;
    token: string;
};
export declare const vidnozClient: {
    makeRequest<T = any>(auth: string, request: Omit<HttpRequest, "authentication">): Promise<T>;
    testConnection(auth: string): Promise<boolean>;
};
//# sourceMappingURL=auth.d.ts.map