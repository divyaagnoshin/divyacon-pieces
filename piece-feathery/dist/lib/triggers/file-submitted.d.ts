import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const fileSubmittedTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    lookup_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    document_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    lookup_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    document_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    lookup_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    document_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    lookup_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    document_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=file-submitted.d.ts.map