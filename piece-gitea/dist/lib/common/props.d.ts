export declare const giteaCommon: {
    repositoryDropdown: import("@agnocon/pieces-framework").DropdownProperty<{
        owner: string;
        repo: string;
    }, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    branchDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export type GiteaRepository = {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
    };
};
export type GiteaBranch = {
    name: string;
};
//# sourceMappingURL=props.d.ts.map