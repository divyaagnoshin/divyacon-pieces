import { HttpMethod } from '@agnocon/pieces-common';
import { TableField } from './types';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { SoftrAuth } from './auth';
export declare const BASE_URL = "https://tables-api.softr.io/api/v1";
export declare function makeRequest<T>(api_key: AppConnectionValueForAuthProperty<typeof SoftrAuth>, method: HttpMethod, path: string, body?: unknown): Promise<T>;
export declare function transformRecordFields(tableFields: TableField[], tableValues: Record<string, any>): Record<string, any>;
//# sourceMappingURL=client.d.ts.map