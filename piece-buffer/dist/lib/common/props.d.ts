declare function fetchOrganizations(accessToken: string): Promise<Organization[]>;
declare function fetchChannels(accessToken: string, organizationId: string): Promise<Channel[]>;
declare function fetchPosts({ accessToken, organizationId, channelIds, statusFilter, first, }: {
    accessToken: string;
    organizationId: string;
    channelIds?: string[];
    statusFilter?: (status: string | undefined) => boolean;
    first?: number;
}): Promise<BufferPost[]>;
export declare const bufferProps: {
    organizationId: () => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    channelIds: (required?: boolean) => import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    channelId: () => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare const bufferQueries: {
    fetchOrganizations: typeof fetchOrganizations;
    fetchChannels: typeof fetchChannels;
    fetchPosts: typeof fetchPosts;
};
export type Organization = {
    id: string;
    name: string;
};
export type Channel = {
    id: string;
    name: string;
    service: string;
    organizationId: string;
    createdAt?: string;
};
export type BufferPost = {
    id: string;
    text?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    dueAt?: string;
    sentAt?: string;
    channelId?: string;
    channelService?: string;
    channel?: {
        id: string;
        name: string;
        service: string;
    };
    tags?: Array<{
        id: string;
        name: string;
    }>;
};
export {};
//# sourceMappingURL=props.d.ts.map