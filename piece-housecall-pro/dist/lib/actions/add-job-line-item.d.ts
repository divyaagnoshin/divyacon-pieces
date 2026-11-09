export declare const addJobLineItem: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    job_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    unit_price: import("@agnocon/pieces-framework").NumberProperty<false>;
    unit_cost: import("@agnocon/pieces-framework").NumberProperty<false>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    tax_surcharge_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    kind: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    taxable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    service_line_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    service_line_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=add-job-line-item.d.ts.map