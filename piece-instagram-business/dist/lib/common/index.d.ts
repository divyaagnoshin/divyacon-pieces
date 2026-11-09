export declare const instagramCommon: {
    baseUrl: string;
    authentication: import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>;
    page: import("@agnocon/pieces-framework").DropdownProperty<FacebookPageDropdown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    caption: import("@agnocon/pieces-framework").LongTextProperty<false>;
    photo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    video: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    getPages: (accessToken: string) => Promise<any>;
    createPhotoPost: (page: FacebookPageDropdown, caption: string | undefined, photo: string) => Promise<any>;
    createVideoPost: (page: FacebookPageDropdown, caption: string | undefined, video: string) => Promise<any>;
};
export interface FacebookPage {
    id: string;
    name: string;
    access_token: string;
    instagram_business_account: {
        id: string;
    };
}
export interface FacebookPageDropdown {
    id: string;
    accessToken: string;
}
//# sourceMappingURL=index.d.ts.map