export declare const flowluProps: {
    task: {
        description: import("@agnocon/pieces-framework").LongTextProperty<false>;
        priority: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
        plan_start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
        deadline: import("@agnocon/pieces-framework").DateTimeProperty<false>;
        deadline_allowchange: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        task_checkbyowner: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        responsible_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        owner_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        type: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
        workflow_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        workflow_stage_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
    };
    account: {
        owner_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        account_category_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        industry_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        web: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        description: import("@agnocon/pieces-framework").LongTextProperty<false>;
        vat: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        bank_details: import("@agnocon/pieces-framework").LongTextProperty<false>;
        telegram: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        skype: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        link_google: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        link_facebook: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        link_linkedin: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        link_instagram: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        billing_country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        billing_state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        billing_city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        billing_zip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        billing_address_line_1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        billing_address_line_2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        billing_address_line_3: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        shipping_country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        shipping_state: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        shipping_city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        shipping_zip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        shipping_address_line_1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        shipping_address_line_2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        shipping_address_line_3: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    };
    opportunity: {
        budget: import("@agnocon/pieces-framework").NumberProperty<false>;
        description: import("@agnocon/pieces-framework").LongTextProperty<false>;
        source_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
        deadline: import("@agnocon/pieces-framework").DateTimeProperty<false>;
        assignee_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        customer_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        contact_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        pipeline_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
        pipeline_stage_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
            domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>>;
    };
};
//# sourceMappingURL=props.d.ts.map