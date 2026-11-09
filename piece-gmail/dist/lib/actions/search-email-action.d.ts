import { GmailLabel } from '../common/models';
export declare const gmailSearchMailAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    content: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    has_attachment: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    attachment_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    after_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    before_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    include_spam_trash: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=search-email-action.d.ts.map