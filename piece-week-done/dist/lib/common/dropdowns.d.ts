import { DropdownState, OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare function weekdoneUsersDropdown(auth: OAuth2PropertyValue): Promise<DropdownState<number>>;
export declare function weekdoneItemCommentsDropdown(auth: OAuth2PropertyValue, itemId: number): Promise<DropdownState<number>>;
export declare function weekdoneTeamsDropdown(auth: OAuth2PropertyValue): Promise<DropdownState<number>>;
export declare function weekdoneTypesDropdown(auth: OAuth2PropertyValue, teamId?: number): Promise<DropdownState<number>>;
export declare function weekdoneItemsDropdown(auth: OAuth2PropertyValue, params: {
    userId?: string | number;
    teamId?: number;
    period?: string;
    typeId?: number;
}): Promise<DropdownState<number>>;
//# sourceMappingURL=dropdowns.d.ts.map