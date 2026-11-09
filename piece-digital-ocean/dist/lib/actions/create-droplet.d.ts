export declare const createDroplet: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[], {
    creation_mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    names: import("@agnocon/pieces-framework").ArrayProperty<true>;
    region: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    size: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    image: import("@agnocon/pieces-framework").DropdownProperty<string | number, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    ssh_keys: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    vpc_uuid: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    backups: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    ipv6: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    monitoring: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    user_data: import("@agnocon/pieces-framework").LongTextProperty<false>;
    with_droplet_agent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-droplet.d.ts.map