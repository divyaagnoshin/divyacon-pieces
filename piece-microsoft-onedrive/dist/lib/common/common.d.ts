import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const oneDriveCommon: {
    getBaseUrl: (cloud?: string | null) => string;
    folderDropdown: typeof createFolderDropdown;
    parentFolder: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    parentFolderInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    getFiles(auth: OAuth2PropertyValue, search?: {
        parentFolder?: string;
        createdTime?: string | number | Date;
        createdTimeOp?: string;
    }, cloud?: string | null): Promise<{
        id: string;
        name: string;
        createdDateTime: string;
    }[]>;
};
declare function createFolderDropdown({ displayName, description }: {
    displayName: string;
    description?: string;
}): import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export {};
//# sourceMappingURL=common.d.ts.map