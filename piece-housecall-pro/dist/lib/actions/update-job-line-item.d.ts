export declare const updateJobLineItem: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    job_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    service_line_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    service_line_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    unit_price: import("@agnocon/pieces-framework").NumberProperty<false>;
    unit_cost: import("@agnocon/pieces-framework").NumberProperty<false>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    kind: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    taxable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-job-line-item.d.ts.map