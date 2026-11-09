import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
import { GitlabApi } from './client';
export declare const gitlabCommon: {
    projectId: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export declare function makeClient(propsValue: {
    auth: OAuth2PropertyValue;
}): GitlabApi;
//# sourceMappingURL=index.d.ts.map