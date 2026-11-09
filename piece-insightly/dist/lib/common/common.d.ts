import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const insightlyAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare const INSIGHTLY_OBJECTS: string[];
export declare function makeInsightlyRequest(auth: AppConnectionValueForAuthProperty<typeof insightlyAuth>, endpoint: string, pod?: string, method?: HttpMethod, body?: any): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
//# sourceMappingURL=common.d.ts.map