import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const registrationFolderSelected: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    scope: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    scope: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    scope: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    scope: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}>;
//# sourceMappingURL=registration-folder-selected.d.ts.map