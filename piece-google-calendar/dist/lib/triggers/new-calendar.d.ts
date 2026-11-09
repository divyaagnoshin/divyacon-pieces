import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newCalendar: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    access_role_filter: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    calendar_name_filter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    exclude_shared: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    access_role_filter: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    calendar_name_filter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    exclude_shared: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    access_role_filter: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    calendar_name_filter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    exclude_shared: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    access_role_filter: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    calendar_name_filter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    exclude_shared: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-calendar.d.ts.map