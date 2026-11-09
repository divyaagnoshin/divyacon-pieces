import { HttpMethod, HttpMessageBody, HttpResponse, QueryParams } from '@agnocon/pieces-common';
import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const WorkdayService: {
    readonly common: "v1";
    readonly staffing: "staffing/v6";
    readonly resourceManagement: "resourceManagement/v3";
    readonly expenseManagement: "expenseManagement/v1";
    readonly inbox: "inbox/v1";
    readonly leaveManagement: "absenceManagement/v1";
    readonly timeTracking: "time/v2";
};
export type ServicePath = typeof WorkdayService[keyof typeof WorkdayService];
export declare function workdayRequest<T extends HttpMessageBody>(auth: OAuth2PropertyValue, method: HttpMethod, path: string, body?: Record<string, unknown>, queryParams?: QueryParams, service?: ServicePath): Promise<HttpResponse<T>>;
export declare function workdayWqlRequest<T extends HttpMessageBody>(auth: OAuth2PropertyValue, query: string, limit?: number, offset?: number): Promise<HttpResponse<T>>;
export declare function fetchAllPages<T>(auth: OAuth2PropertyValue, path: string, queryParams?: QueryParams, dataKey?: string, service?: ServicePath): Promise<T[]>;
export declare function workdaySoapRequest(auth: OAuth2PropertyValue, soapService: string, operationXml: string): Promise<Record<string, unknown>>;
export declare function escapeWql(value: string): string;
export declare function getApiHost(auth: OAuth2PropertyValue): string;
export declare function workdayWqlRequestAll(auth: OAuth2PropertyValue, query: string): Promise<Record<string, unknown>[]>;
export declare function workdayGetReport(auth: OAuth2PropertyValue, reportId: string, queryParams?: QueryParams): Promise<Record<string, unknown>>;
export declare function workdayListCustomObjectDefinitions(auth: OAuth2PropertyValue): Promise<Record<string, unknown>[]>;
export declare function workdayGetCustomObject(auth: OAuth2PropertyValue, definitionId: string, objectId: string): Promise<Record<string, unknown>>;
export declare function workdayUpsertCustomObject(auth: OAuth2PropertyValue, definitionId: string, body: Record<string, unknown>): Promise<Record<string, unknown>>;
//# sourceMappingURL=index.d.ts.map