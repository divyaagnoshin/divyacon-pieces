import { TriggerStrategy } from '@agnocon/pieces-framework';
import { GmailLabel } from '../common/models';
export declare const gmailNewAttachmentTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    from: {
        description: string;
        displayName: string;
        required: false;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    to: {
        description: string;
        displayName: string;
        required: false;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: {
        description: string;
        displayName: string;
        required: false;
        options: import("@agnocon/pieces-framework").DropdownState<string>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.STATIC_DROPDOWN;
        defaultValue?: unknown;
    };
    filenameExtension: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    from: {
        description: string;
        displayName: string;
        required: false;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    to: {
        description: string;
        displayName: string;
        required: false;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: {
        description: string;
        displayName: string;
        required: false;
        options: import("@agnocon/pieces-framework").DropdownState<string>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.STATIC_DROPDOWN;
        defaultValue?: unknown;
    };
    filenameExtension: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    from: {
        description: string;
        displayName: string;
        required: false;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    to: {
        description: string;
        displayName: string;
        required: false;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: {
        description: string;
        displayName: string;
        required: false;
        options: import("@agnocon/pieces-framework").DropdownState<string>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.STATIC_DROPDOWN;
        defaultValue?: unknown;
    };
    filenameExtension: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    from: {
        description: string;
        displayName: string;
        required: false;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    to: {
        description: string;
        displayName: string;
        required: false;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    label: import("@agnocon/pieces-framework").DropdownProperty<GmailLabel, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    category: {
        description: string;
        displayName: string;
        required: false;
        options: import("@agnocon/pieces-framework").DropdownState<string>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.STATIC_DROPDOWN;
        defaultValue?: unknown;
    };
    filenameExtension: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-attachment.d.ts.map