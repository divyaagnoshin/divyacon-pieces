import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const common: {
    baseUrl: (region: string) => string;
    authHeaders: (accessToken: string) => {
        Authorization: string;
    };
    getInvoices(auth: OAuth2PropertyValue, search?: {
        createdSince?: string;
    }): Promise<any>;
};
//# sourceMappingURL=index.d.ts.map