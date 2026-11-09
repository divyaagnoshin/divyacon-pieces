export declare const socialSetDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const tagsMultiSelectDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const instructionsMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
export declare const draftSampleData: {
    id: number;
    social_set_id: number;
    status: string;
    created_at: string;
    updated_at: string;
    scheduled_date: string;
    published_at: string;
    draft_title: string;
    tags: string[];
    preview: string;
    share_url: string;
    private_url: string;
    platforms: {
        x: {
            enabled: boolean;
            posts: {
                text: string;
            }[];
        };
        linkedin: {
            enabled: boolean;
            posts: {
                text: string;
            }[];
        };
    };
};
//# sourceMappingURL=props.d.ts.map