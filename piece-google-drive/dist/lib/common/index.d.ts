import { GoogleDriveAuthValue } from '../auth';
export declare const common: {
    properties: {
        parentFolder: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
            serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
            userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        }>)[]>;
        include_team_drives: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    };
    getFiles(auth: GoogleDriveAuthValue, search?: {
        parent?: string;
        createdTime?: string | number | Date;
        createdTimeOp?: string;
        includeTeamDrive?: boolean;
    }, order?: string): Promise<any[]>;
    getFolders(auth: GoogleDriveAuthValue, search?: {
        parent?: string;
        createdTime?: string | number | Date;
        createdTimeOp?: string;
        includeTeamDrive?: boolean;
    }, order?: string): Promise<any[]>;
};
//# sourceMappingURL=index.d.ts.map