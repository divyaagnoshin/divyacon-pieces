import { ButtondownSubscriberType } from '../common/types';
export declare const createSubscriber: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<ButtondownSubscriberType, false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    metadata: import("@agnocon/pieces-framework").JsonProperty<false>;
    referrerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utmSource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utmMedium: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    utmCampaign: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    referringSubscriberId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ipAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    collisionBehavior: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    bypassFirewall: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-subscriber.d.ts.map