import { HttpMethod } from '@agnocon/pieces-common';
export declare function sendItRequest(apiKey: string, method: HttpMethod, path: string, body?: unknown, params?: Record<string, string>): Promise<any>;
export declare const BASE_URL = "https://sendit.infiniteappsai.com/api/v1";
export declare const platformProperty: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
export declare const textProperty: import("@agnocon/pieces-framework").LongTextProperty<true>;
export declare const mediaUrlProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const mediaUrlsProperty: import("@agnocon/pieces-framework").ArrayProperty<false>;
export declare const mediaTypeProperty: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const scheduleIdProperty: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const scheduledTimeProperty: import("@agnocon/pieces-framework").DateTimeProperty<true>;
export declare const platformFilterProperty: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
//# sourceMappingURL=common.d.ts.map