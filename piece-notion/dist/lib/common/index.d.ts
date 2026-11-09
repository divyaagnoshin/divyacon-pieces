import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { notionAuth } from '../auth';
export type NotionAuthValue = AppConnectionValueForAuthProperty<typeof notionAuth>;
export declare function getNotionToken(auth: NotionAuthValue): string;
export declare const notionCommon: {
    baseUrl: string;
    database_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    database_item_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    archived_database_item_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    databaseFields: import("@agnocon/pieces-framework").DynamicProperties<true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    filterDatabaseFields: import("@agnocon/pieces-framework").DynamicProperties<true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    page: import("@agnocon/pieces-framework").DropdownProperty<any, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
};
export declare function getPages(auth: NotionAuthValue, search?: {
    editedAfter?: Date;
    createdAfter?: Date;
}, sort?: {
    property: string;
    direction: 'ascending' | 'descending';
}): Promise<any[]>;
//# sourceMappingURL=index.d.ts.map