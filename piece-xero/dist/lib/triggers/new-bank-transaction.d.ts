import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const xeroNewBankTransaction: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    bank_account_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    page_size: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=new-bank-transaction.d.ts.map