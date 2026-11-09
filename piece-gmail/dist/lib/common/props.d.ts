import { GmailLabel } from './models';
export declare const GmailProps: {
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    category: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    label: <R extends boolean = false>(overrides: {
        displayName?: string;
        description?: string;
        required: R;
    }) => R extends true ? import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]> : import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    unread: (required?: boolean) => import("@agnocon/pieces-framework").CheckboxProperty<true> | import("@agnocon/pieces-framework").CheckboxProperty<false>;
    message: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    thread: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
};
//# sourceMappingURL=props.d.ts.map