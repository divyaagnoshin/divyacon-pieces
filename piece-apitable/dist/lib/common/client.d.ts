import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { AITableFieldType } from './constants';
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class AITableClient {
    private apiTableUrl;
    private token;
    constructor(apiTableUrl: string, token: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: QueryParams, body?: any | undefined): Promise<T>;
    listSpaces(): Promise<{
        data: {
            spaces: {
                id: string;
                name: string;
            }[];
        };
    }>;
    listDatasheets(space_id: string): Promise<{
        data: {
            nodes: {
                id: string;
                name: string;
            }[];
        };
    }>;
    getDatasheetFields(datasheet_id: string): Promise<{
        data: {
            fields: {
                id: string;
                name: string;
                type: AITableFieldType;
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
        };
    }>;
    createRecord(datasheet_id: string, request: object): Promise<unknown>;
    updateRecord(datasheet_id: string, request: object): Promise<unknown>;
    listRecords(datasheet_id: string, query?: QueryParams): Promise<{
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