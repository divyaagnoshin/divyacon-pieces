import { HttpMethod } from '@agnocon/pieces-common';
export declare const senderAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare function makeSenderRequest(auth: string, endpoint: string, method?: HttpMethod, body?: any): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare const groupIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const groupIdsDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const subscribersDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const subscriberDropdownSingle: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const campaignDropdown: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
//# sourceMappingURL=common.d.ts.map