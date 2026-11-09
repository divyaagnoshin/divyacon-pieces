declare const _default: (import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    paste_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    include_title: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    paste_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    include_title: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    paste_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    include_title: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    paste_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    include_title: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>)[];
export default _default;
//# sourceMappingURL=index.d.ts.map