import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newTask: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    assigned_to_team: import("@agnocon/pieces-framework").NumberProperty<false>;
    created_by: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    task_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    assigned_to_team: import("@agnocon/pieces-framework").NumberProperty<false>;
    created_by: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    task_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    assigned_to_team: import("@agnocon/pieces-framework").NumberProperty<false>;
    created_by: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    task_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    assigned_to_team: import("@agnocon/pieces-framework").NumberProperty<false>;
    created_by: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    task_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=new-task.d.ts.map