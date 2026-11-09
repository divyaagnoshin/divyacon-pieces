import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const profileAddedToListOrSegmentTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[], {
    targetType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    listId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
    segmentId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[], {
    targetType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    listId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
    segmentId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[], {
    targetType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    listId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
    segmentId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[], {
    targetType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    listId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
    segmentId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
}>;
//# sourceMappingURL=profile-added-to-list-segment.d.ts.map