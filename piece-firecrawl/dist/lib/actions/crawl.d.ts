export declare const crawl: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    formats: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    onlyMainContent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    extractMode: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    extractSchema: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    useWebhook: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    webhookProperties: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=crawl.d.ts.map