import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newEvent: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    event_category: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    start_date_min: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    start_date_max: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    event_category: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    start_date_min: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    start_date_max: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    event_category: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    start_date_min: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    start_date_max: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    event_category: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    start_date_min: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    start_date_max: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=new-event.d.ts.map