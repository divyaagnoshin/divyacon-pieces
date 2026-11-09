export declare const drupalCallServiceAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    service: import("@agnocon/pieces-framework").DropdownProperty<DrupalService, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    config: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
interface DrupalService {
    id: string;
    label: string;
    description: string;
    config: DrupalServiceConfig[];
}
interface DrupalServiceConfig {
    key: string;
    label: string;
    description: string;
    required: boolean;
    type: string;
    default_value: string;
    options: string[];
    editable: boolean;
}
export {};
//# sourceMappingURL=services.d.ts.map