import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { comfyIcuAuth } from '../auth';
export declare function comfyIcuApiCall({ apiKey: { secret_text }, endpoint, method, qparams, body, }: {
    apiKey: AppConnectionValueForAuthProperty<typeof comfyIcuAuth>;
    endpoint: string;
    method: HttpMethod;
    qparams?: QueryParams;
    body?: any;
}): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare const commonProps: {
    workflow_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    run_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
//# sourceMappingURL=index.d.ts.map