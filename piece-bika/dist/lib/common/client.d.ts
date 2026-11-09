import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { BikaFieldType } from './constants';
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class BikaClient {
    private token;
    private bikaUrl;
    constructor(token: string, bikaUrl?: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: QueryParams, body?: any | undefined): Promise<T>;
    listSpaces(): Promise<{
        data: {
            id: string;
            name: string;
        }[];
    }>;
    listDatabases(space_id: string): Promise<{
        data: {
            id: string;
            name: string;
        }[];
    }>;
    getDatabaseFields(space_id: string, database_id: string): Promise<{
        data: {
            id: string;
            name: string;
            type: BikaFieldType;
            desc: string;
            property?: {
                format?: string;
                defaultValue?: string;
                options?: {
                    name: string;
                    id?: string;
                }[];
            };
        }[];
    }>;
    createRecord(space_id: string, database_id: string, request: object): Promise<unknown>;
    deleteRecord(space_id: string, database_id: string, record_id: string): Promise<unknown>;
    updateRecord(space_id: string, database_id: string, record_id: string, request: object): Promise<unknown>;
    findRecord(space_id: string, database_id: string, record_id: string, query?: QueryParams): Promise<{
        data: {
            total: number;
            records: {
                recordId: string;
                createdAt: number;
                updatedAt: number;
                fields: Record<string, unknown>;
            }[];
        };
    }>;
    listRecords(space_id: string, database_id: string, query?: QueryParams): Promise<{
        data: {
            total: number;
            records: {
                recordId: string;
                createdAt: number;
                updatedAt: number;
                fields: Record<string, unknown>;
            }[];
        };
    }>;
}
//# sourceMappingURL=client.d.ts.map