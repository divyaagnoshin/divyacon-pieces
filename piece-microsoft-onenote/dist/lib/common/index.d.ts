import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare function getNotebooksDropdown(auth: OAuth2PropertyValue): Promise<{
    disabled: boolean;
    options: any;
    placeholder?: undefined;
} | {
    disabled: boolean;
    placeholder: string;
    options: never[];
}>;
export declare function getSectionsDropdown(auth: OAuth2PropertyValue): Promise<{
    disabled: boolean;
    options: any;
    placeholder?: undefined;
} | {
    disabled: boolean;
    placeholder: string;
    options: never[];
}>;
export declare function getPagesDropdown(auth: OAuth2PropertyValue): Promise<{
    disabled: boolean;
    options: any;
    placeholder?: undefined;
} | {
    disabled: boolean;
    placeholder: string;
    options: never[];
}>;
export declare function getSectionsByNotebookDropdown(auth: OAuth2PropertyValue, notebookId: string): Promise<{
    disabled: boolean;
    options: any;
    placeholder?: undefined;
} | {
    disabled: boolean;
    placeholder: string;
    options: never[];
}>;
export declare function getPagesBySectionDropdown(auth: OAuth2PropertyValue, sectionId: string): Promise<{
    disabled: boolean;
    options: any;
    placeholder?: undefined;
} | {
    disabled: boolean;
    placeholder: string;
    options: never[];
}>;
//# sourceMappingURL=index.d.ts.map