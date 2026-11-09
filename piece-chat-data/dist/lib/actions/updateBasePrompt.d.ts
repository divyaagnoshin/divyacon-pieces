export declare const updateBasePrompt: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chatbotId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    chatbotName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    basePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    initialMessages: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    suggestedMessages: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    visibility: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    baseModel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    storeChat: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    trackIpAddress: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    rateLimitPoints: import("@agnocon/pieces-framework").NumberProperty<false>;
    rateLimitTimeframe: import("@agnocon/pieces-framework").NumberProperty<false>;
    rateLimitMessage: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    onlyAllowOnAddedDomains: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    domains: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    showCalendar: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    calendarUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    calendarMessage: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    enableBouncingAnimation: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    ignoreDataSource: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    customBackend: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bearer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=updateBasePrompt.d.ts.map