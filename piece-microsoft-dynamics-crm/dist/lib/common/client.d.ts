import { HttpHeaders, HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { EntityAttributeType } from './constants';
import { EntityAttributeResponse, EntityTypeAttributesResponse, EntityTypeResponse } from './types';
export declare class DynamicsCRMClient {
    private hostUrl;
    private accessToken;
    private proxyUrl?;
    constructor(hostUrl: string, accessToken: string, proxyUrl?: string | undefined);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, headers?: HttpHeaders, query?: QueryParams, body?: any | undefined): Promise<T>;
    createRecord(entityUrlPath: string, request: unknown): Promise<unknown>;
    updatedRecord(entityUrlPath: string, recordId: string, request: unknown): Promise<unknown>;
    getRecord(entityUrlPath: string, recordId: string): Promise<unknown>;
    deleteRecord(entityUrlPath: string, recordId: string): Promise<unknown>;
    fetchEntityTypes(): Promise<EntityTypeResponse>;
    fetchEntityTypeAttributes(entitySetName: string): Promise<EntityTypeAttributesResponse>;
    fetchEntityAttributes(entityName: string): Promise<EntityAttributeResponse>;
    fetchOptionFieldValues(entityName: string, entityAttributeName: string, entityAttributeType: EntityAttributeType): Promise<{
        label: string;
        value: string | number;
    }[]>;
}
//# sourceMappingURL=client.d.ts.map