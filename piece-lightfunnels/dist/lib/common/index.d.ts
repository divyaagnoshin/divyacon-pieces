import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const lightfunnelsCommon: {
    baseUrl: string;
    makeGraphQLRequest<T = any>(auth: OAuth2PropertyValue, query: string, variables?: Record<string, any>): Promise<{
        data: T;
    }>;
};
//# sourceMappingURL=index.d.ts.map