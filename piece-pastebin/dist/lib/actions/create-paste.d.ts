import { PasteExpiry, PastePrivacy } from '../common/client';
declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    privacy: import("@agnocon/pieces-framework").StaticDropdownProperty<PastePrivacy, false>;
    expiry: import("@agnocon/pieces-framework").StaticDropdownProperty<PasteExpiry, false>;
    folder: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
export default _default;
//# sourceMappingURL=create-paste.d.ts.map