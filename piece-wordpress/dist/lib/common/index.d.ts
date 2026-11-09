export type WordPressMedia = {
    id: string;
    title: {
        rendered: string;
    };
};
export declare const wordpressCommon: {
    featured_media_file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    authors: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    categories: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    featured_media: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    post: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    getPosts(params: {
        websiteUrl: string;
        username: string;
        password: string;
        authors: string | undefined;
        afterDate: string;
        page: number;
    }): Promise<{
        posts: {
            date: string;
        }[];
        totalPages: number;
    }>;
    getMedia(params: {
        websiteUrl: string;
        username: string;
        password: string;
        page: number;
    }): Promise<{
        media: WordPressMedia[];
        totalPages: number;
    }>;
    getTags(params: {
        websiteUrl: string;
        username: string;
        password: string;
        page: number;
    }): Promise<{
        tags: {
            id: string;
            name: string;
        }[];
        totalPages: number;
    }>;
    getCategories(params: {
        websiteUrl: string;
        username: string;
        password: string;
        page: number;
    }): Promise<{
        categories: {
            id: string;
            name: string;
        }[];
        totalPages: number;
    }>;
    urlExists(url: string): Promise<boolean>;
    isBaseUrl(urlString: string): Promise<boolean>;
};
//# sourceMappingURL=index.d.ts.map