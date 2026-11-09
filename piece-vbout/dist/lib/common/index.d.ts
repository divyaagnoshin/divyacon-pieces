import { VboutClient } from './client';
import { ContactStatusValues, SocialMediaChannelValues } from './models';
export declare function makeClient(apiKey: string): VboutClient;
export declare const vboutCommon: {
    baseUrl: string;
    listid: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    listFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    contactStatus: (required?: boolean) => import("@agnocon/pieces-framework").StaticDropdownProperty<ContactStatusValues, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<ContactStatusValues, true>;
    socialMediaChannel: import("@agnocon/pieces-framework").StaticDropdownProperty<SocialMediaChannelValues, true>;
    socialMediaProfile: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=index.d.ts.map