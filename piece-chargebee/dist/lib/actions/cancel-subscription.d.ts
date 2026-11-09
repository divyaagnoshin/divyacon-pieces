export declare const cancelSubscription: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    site: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    subscription_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    cancel_option: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    cancel_at: import("@agnocon/pieces-framework").NumberProperty<false>;
    cancel_reason_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    credit_option_for_current_term_charges: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    unbilled_charges_option: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    contract_term_cancel_option: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    account_receivables_handling: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    refundable_credits_handling: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    invoice_date: import("@agnocon/pieces-framework").NumberProperty<false>;
    decommissioned: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    termination_fee_item_price_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    termination_fee_quantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    termination_fee_unit_price: import("@agnocon/pieces-framework").NumberProperty<false>;
    termination_fee_service_period_days: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=cancel-subscription.d.ts.map