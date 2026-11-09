import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { client } from '@datadog/datadog-api-client';
import { datadogAuth } from './auth';
export declare const getDatadogConfiguration: (auth: AppConnectionValueForAuthProperty<typeof datadogAuth>) => client.Configuration;
export declare const constructDatadogBaseUrl: (auth: AppConnectionValueForAuthProperty<typeof datadogAuth>, subdomain?: string, version?: string) => string;
export declare const constructDatadogBaseHeaders: (auth: AppConnectionValueForAuthProperty<typeof datadogAuth>) => {
    'DD-APPLICATION-KEY'?: string | undefined;
    Accept: string;
    'DD-API-KEY': string;
};
//# sourceMappingURL=helpers.d.ts.map