import { QueryParams } from '@agnocon/pieces-common';
import { MatomoAuthType } from './auth';
export declare function getVersion(auth: MatomoAuthType): Promise<{
    success: boolean;
    data: any;
}>;
export declare function addAnnotation(auth: MatomoAuthType, data: QueryParams): Promise<{
    success: boolean;
    data: any;
}>;
//# sourceMappingURL=api.d.ts.map