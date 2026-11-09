import { HttpMessageBody, HttpMethod, HttpHeaders } from '@agnocon/pieces-common';
import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { oracleFusionCloudErpAuth } from '../auth';
type OracleAuthValue = PiecePropValueSchema<typeof oracleFusionCloudErpAuth>;
interface OracleAPIResponse<T> {
    items: T[];
    count: number;
    hasMore: boolean;
    limit: number;
    offset: number;
    links: any[];
}
interface OracleRecord {
    [key: string]: any;
}
export type filterParams = Record<string, string | number | string[] | undefined>;
export declare class OracleFusionAPIClient {
    private serverUrl;
    private credentials;
    constructor(serverUrl: string, username: string, password: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: filterParams, body?: any, headers?: HttpHeaders): Promise<T>;
    createRecord(endpoint: string, request: Record<string, any>): Promise<OracleRecord>;
    updateRecord(endpoint: string, request: Record<string, any>): Promise<OracleRecord>;
    getRecord(endpoint: string): Promise<OracleRecord>;
    deleteRecord(endpoint: string): Promise<void>;
    searchRecords<T = OracleRecord>(endpoint: string, params: filterParams): Promise<OracleAPIResponse<T>>;
    getBusinessObjects(): Promise<any[]>;
    executeAction(actionEndpoint: string, payload: Record<string, any>): Promise<OracleRecord>;
}
export declare function makeClient(auth: OracleAuthValue): OracleFusionAPIClient;
export {};
//# sourceMappingURL=client.d.ts.map