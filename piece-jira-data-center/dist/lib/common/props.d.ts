import { JiraDataCenterAuth } from '../../auth';
import { IssueFieldMetaData } from './types';
export declare function getProjectIdDropdown(data?: DropdownParams): import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare function getIssueIdDropdown(data?: DropdownParams): import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare function getIssueTypeIdDropdown(data?: DropdownParams): import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare function getUsersDropdown(data?: DropdownParams): import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const issueTypeIdProp: (displayName: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const issueLinkTypeIdProp: (displayName: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const issueIdOrKeyProp: (displayName: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const issueStatusIdProp: (displayName: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare function createPropertyDefinition(auth: JiraDataCenterAuth, field: IssueFieldMetaData, isRequired?: boolean, projectKey?: string): Promise<import("@agnocon/pieces-framework").ShortTextProperty<true> | import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true> | import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").LongTextProperty<false> | import("@agnocon/pieces-framework").LongTextProperty<true> | import("@agnocon/pieces-framework").NumberProperty<true> | import("@agnocon/pieces-framework").DateTimeProperty<true> | import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").DateTimeProperty<false> | null>;
export declare function formatIssueFields(fieldsMetadata: IssueFieldMetaData[], fieldsInput: Record<string, any>): Record<string, any>;
export declare function transformCustomFields(fieldsMetadata: IssueFieldMetaData[], fieldsInput: Record<string, any>): Record<string, any>;
export interface DropdownParams {
    required?: boolean;
    refreshers?: string[];
    displayName?: string;
    description?: string;
}
export interface SearchIssuesResponse {
    startAt: number;
    maxResults: number;
    total: number;
    issues: Array<{
        id: string;
        key: string;
        fields: {
            summary: string;
        };
    }>;
}
//# sourceMappingURL=props.d.ts.map