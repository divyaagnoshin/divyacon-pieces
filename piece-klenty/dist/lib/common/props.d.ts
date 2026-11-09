export type ProspectPayloadInput = {
    email?: string;
    firstName?: string;
    company?: string;
    fullName?: string;
    lastName?: string;
    middleName?: string;
    account?: string;
    department?: string;
    companyDomain?: string;
    title?: string;
    location?: string;
    phone?: string;
    twitterId?: string;
    companyPhone?: string;
    companyEmail?: string;
    linkedinURL?: string;
    city?: string;
    country?: string;
    listName?: string;
    tags?: string;
    outcome?: string;
    owner?: string;
    customFields?: unknown[];
};
export declare const listNameProp: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const cadenceNameProp: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const prospectCommonProps: {
    company: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    fullName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    middleName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    account: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    department: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    twitterId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    companyPhone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    companyEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linkedinURL: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    listName: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    tags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    outcome: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    owner: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    customFields: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
};
export declare function buildProspectPayload(input: ProspectPayloadInput): Record<string, unknown>;
//# sourceMappingURL=props.d.ts.map