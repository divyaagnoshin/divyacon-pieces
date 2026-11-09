import { HttpMethod } from "@agnocon/pieces-common";
import { AppConnectionValueForAuthProperty } from "@agnocon/pieces-framework";
import { magicalApiAuth } from "./auth";
export declare const BASE_URL = "https://gw.magicalapi.com";
export declare function makeRequest(apiKey: AppConnectionValueForAuthProperty<typeof magicalApiAuth>, method: HttpMethod, path: string, body?: any): Promise<any>;
//# sourceMappingURL=client.d.ts.map