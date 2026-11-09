import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const callableFlow: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    exampleData: import("@agnocon/pieces-framework").DynamicProperties<true, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    exampleData: import("@agnocon/pieces-framework").DynamicProperties<true, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    exampleData: import("@agnocon/pieces-framework").DynamicProperties<true, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    exampleData: import("@agnocon/pieces-framework").DynamicProperties<true, undefined>;
}>;
//# sourceMappingURL=callable-flow.d.ts.map