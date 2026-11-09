import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newSummaryPaymentsTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    location_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    area_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    location_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    area_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    location_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    area_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    location_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    area_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    include_deleted: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-summary-payments.trigger.d.ts.map