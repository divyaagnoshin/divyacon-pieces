import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newFormCreated: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    formType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    formType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    formType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    formType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=new-form-created.d.ts.map