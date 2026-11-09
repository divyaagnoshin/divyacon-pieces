export declare const sendLogs: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    personalOrTeamApiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sendYourDataApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    coralogixDomain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    applicationName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subsystemName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    severity: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    category: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    className: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    computerName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    methodName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    threadId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timestamp: import("@agnocon/pieces-framework").NumberProperty<false>;
    hiResTimestamp: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=send-logs.d.ts.map