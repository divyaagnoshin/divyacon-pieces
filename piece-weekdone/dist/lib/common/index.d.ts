declare function fetchUsers({ token }: {
    token: string;
}): Promise<WeekdoneUser[]>;
declare function fetchTeams({ token }: {
    token: string;
}): Promise<WeekdoneTeam[]>;
declare function userDropdown({ displayName, description, required, }: {
    displayName: string;
    description: string;
    required: boolean;
}): import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
declare function teamDropdown({ displayName, description, required, }: {
    displayName: string;
    description: string;
    required: boolean;
}): import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const weekdoneCommon: {
    fetchUsers: typeof fetchUsers;
    fetchTeams: typeof fetchTeams;
    userDropdown: typeof userDropdown;
    teamDropdown: typeof teamDropdown;
};
export type WeekdoneUser = {
    id: number;
    name: string;
    team_id: number;
};
export type WeekdoneTeam = {
    id: number;
    name: string;
};
export {};
//# sourceMappingURL=index.d.ts.map