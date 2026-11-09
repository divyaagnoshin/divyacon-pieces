import { businessCentralAuth } from '../auth';
import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
interface ListAPIResponse<T> {
    '@odata.context': string;
    value: Array<T>;
}
interface CompanyResponse {
    id: string;
    name: string;
}
export type filterParams = Record<string, string | number | string[] | undefined>;
export declare class BusinessCentralAPIClient {
    private environment;
    private accessToken;
    private cloud?;
    constructor(environment: string, accessToken: string, cloud?: (string | null) | undefined);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: filterParams, body?: any | undefined): Promise<T>;
    listCompanies(): Promise<ListAPIResponse<CompanyResponse>>;
    createRecord(endpoint: string, request: Record<string, any>): Promise<unknown>;
    updateRecord(endpoint: string, request: Record<string, any>): Promise<unknown>;
    getRecord(endpoint: string): Promise<unknown>;
    deleteRecord(endpoint: string): Promise<unknown>;
    filterRecords(companyId: string, recordType: string, params: filterParams): Promise<ListAPIResponse<Record<string, unknown>>>;
}
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof businessCentralAuth>): BusinessCentralAPIClient;
export {};
//# sourceMappingURL=client.d.ts.map