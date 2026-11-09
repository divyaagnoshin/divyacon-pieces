import { HttpHeaders, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { metabaseAuth } from '..';
export declare function queryMetabaseApi(params: {
    endpoint: string;
    method: HttpMethod;
    queryParams?: QueryParams;
    headers?: HttpHeaders;
    body?: object;
    responseType?: 'arraybuffer' | 'json' | 'blob' | 'text';
}, auth: AppConnectionValueForAuthProperty<typeof metabaseAuth>): Promise<any>;
//# sourceMappingURL=common.d.ts.map