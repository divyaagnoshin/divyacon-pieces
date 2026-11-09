import { HttpMethod } from '@agnocon/pieces-common';
export declare const APITEMPLATE_REGIONS: {
    readonly default: "https://rest.apitemplate.io";
    readonly europe: "https://rest-de.apitemplate.io";
    readonly us: "https://rest-us.apitemplate.io";
    readonly australia: "https://rest-au.apitemplate.io";
    readonly 'alt-default': "https://rest-alt.apitemplate.io";
    readonly 'alt-europe': "https://rest-alt-de.apitemplate.io";
    readonly 'alt-us': "https://rest-alt-us.apitemplate.io";
};
export type ApitemplateRegion = keyof typeof APITEMPLATE_REGIONS;
export interface ApitemplateAuthConfig {
    apiKey: string;
    region: ApitemplateRegion;
}
export declare const BASE_URL: "https://rest.apitemplate.io";
export declare function getRegionalBaseUrl(region?: ApitemplateRegion): string;
export declare function makeRequest(apiKey: string, method: HttpMethod, path: string, body?: unknown, headers?: Record<string, string> | string, region?: ApitemplateRegion): Promise<any>;
//# sourceMappingURL=client.d.ts.map