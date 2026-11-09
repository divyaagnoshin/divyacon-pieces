import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newOpportunity: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    stage: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    manager: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    include_closed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    min_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    target_close_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    target_close_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    stage: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    manager: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    include_closed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    min_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    target_close_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    target_close_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    stage: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    manager: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    include_closed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    min_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    target_close_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    target_close_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    stage: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    manager: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    include_closed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    min_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_probability: import("@agnocon/pieces-framework").NumberProperty<false>;
    target_close_after: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    target_close_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=new-opportunity.d.ts.map