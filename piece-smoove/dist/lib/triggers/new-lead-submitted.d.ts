import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newLeadSubmitted: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    monitoringMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    landingPageId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    includeCustomFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeContactDetails: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    monitoringMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    landingPageId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    includeCustomFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeContactDetails: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    monitoringMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    landingPageId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    includeCustomFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeContactDetails: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    monitoringMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    landingPageId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    includeCustomFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeContactDetails: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-lead-submitted.d.ts.map