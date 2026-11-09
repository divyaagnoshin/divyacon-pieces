import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newComment: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=new-comment.d.ts.map