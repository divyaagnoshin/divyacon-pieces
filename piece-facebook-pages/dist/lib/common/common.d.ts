export declare const facebookPagesCommon: {
    baseUrl: string;
    page: import("@agnocon/pieces-framework").DropdownProperty<FacebookPageDropdown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    link: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    caption: import("@agnocon/pieces-framework").LongTextProperty<false>;
    photo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    video: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    getPages: (accessToken: string) => Promise<any>;
    createPost: (page: FacebookPageDropdown, message: string, link: string | undefined) => Promise<any>;
    createPhotoPost: (page: FacebookPageDropdown, caption: string | undefined, photo: string) => Promise<any>;
    createVideoPost: (page: FacebookPageDropdown, title: string | undefined, description: string | undefined, video: string) => Promise<any>;
};
export interface FacebookPage {
    id: string;
    name: string;
    category: string;
    category_list: string[];
    access_token: string;
    tasks: string[];
}
export interface FacebookPageDropdown {
    id: string;
    accessToken: string;
}
//# sourceMappingURL=common.d.ts.map