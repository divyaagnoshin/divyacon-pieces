import { ApFile } from '@agnocon/pieces-framework';
export declare const santizeText: (text: string) => string;
export declare const linkedinCommon: {
    baseUrl: string;
    linkedinHeaders: {
        'X-Restli-Protocol-Version': string;
        'LinkedIn-Version': string;
    };
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    imageUrl: import("@agnocon/pieces-framework").FileProperty<false, false>;
    link: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linkTitle: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linkDescription: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    visibility: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    company: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    getCompanies: (accessToken: string) => Promise<any>;
    generatePostRequestBody: (data: {
        urn: string;
        text: any;
        link?: string | undefined;
        linkTitle?: string | undefined;
        linkDescription?: string | undefined;
        visibility: string;
        image?: Image | undefined;
    }) => Post;
    uploadImage: (accessToken: string, urn: string, image: ApFile) => Promise<Image>;
};
export interface UgcPost {
    author: string;
    lifecycleState: string;
    specificContent: {
        'com.linkedin.ugc.ShareContent': {
            shareCommentary: {
                text?: string;
            };
            shareMediaCategory: string;
            media?: [
                {
                    status: string;
                    description?: {
                        text: string;
                    };
                    originalUrl?: string;
                    thumbnail?: string;
                    title?: {
                        text: string;
                    };
                }
            ];
        };
    };
    visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': string;
    };
}
export interface Post {
    author: string;
    commentary: string;
    lifecycleState: string;
    visibility: string;
    distribution: {
        feedDistribution: string;
    };
    content?: {
        article?: {
            source: string;
            thumbnail?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
        };
        media?: {
            id: string;
        };
    };
    isReshareDisabledByAuthor: boolean;
}
export interface Image {
    value: {
        uploadUrlExpiresAt: number;
        uploadUrl: string;
        image: string;
    };
}
//# sourceMappingURL=index.d.ts.map