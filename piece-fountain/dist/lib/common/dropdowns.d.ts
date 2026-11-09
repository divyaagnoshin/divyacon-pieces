import { DropdownOption, AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { fountainAuth } from '../auth';
export declare function getFunnelsDropdown(auth: AppConnectionValueForAuthProperty<typeof fountainAuth>): Promise<DropdownOption<string>[]>;
export declare function getLocationsDropdown(auth: AppConnectionValueForAuthProperty<typeof fountainAuth>): Promise<DropdownOption<string>[]>;
export declare function getUsersDropdown(auth: AppConnectionValueForAuthProperty<typeof fountainAuth>): Promise<DropdownOption<string>[]>;
export declare function getStagesForFunnelDropdown(auth: AppConnectionValueForAuthProperty<typeof fountainAuth>, funnelId?: string): Promise<DropdownOption<string>[]>;
//# sourceMappingURL=dropdowns.d.ts.map