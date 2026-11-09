import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const transferTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {}>;
//# sourceMappingURL=transfer.d.ts.map