/**
 * Generated from API version: 3.96.4
 */
export declare const notificationsCreateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    notification: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    via: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    notifications: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    webhook__callbackUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    kafka__topic: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    kafka__brokers: import("@agnocon/pieces-framework").ArrayProperty<true>;
    kafka__compressionCodec: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    kafka__securityProtocol: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    kafka__saslMechanism: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    kafka__saslUsername: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    kafka__saslPassword: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=notifications-create.d.ts.map