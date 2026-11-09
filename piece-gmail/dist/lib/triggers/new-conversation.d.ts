import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const gmailNewConversationTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    maxAgeHours: import("@agnocon/pieces-framework").NumberProperty<false>;
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
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    maxAgeHours: import("@agnocon/pieces-framework").NumberProperty<false>;
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
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    maxAgeHours: import("@agnocon/pieces-framework").NumberProperty<false>;
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
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    maxAgeHours: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=new-conversation.d.ts.map