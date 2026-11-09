import { TriggerStrategy } from '@agnocon/pieces-framework';
import { GmailLabel } from '../common/models';
export declare const gmailNewEmailTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=new-email.d.ts.map