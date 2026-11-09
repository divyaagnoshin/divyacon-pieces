export interface Space {
    id: number;
    name: string;
}
export interface ListSpacesResponse {
    records: Space[];
    page?: number;
    per_page?: number;
    has_next_page?: boolean;
    count?: number;
    page_count?: number;
}
export interface BasicPostFromList {
    id: number;
    status: string;
    name: string;
    slug: string;
    comments_count: number;
    hide_meta_info: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
    is_comments_enabled: boolean;
    is_liking_enabled: boolean;
    flagged_for_approval_at: string | null;
    body: {
        id: number;
        name: string;
        body: string;
        record_type: string;
        record_id: number;
        created_at: string;
        updated_at: string;
    };
    url: string;
    space_name: string;
    space_slug: string;
    space_id: number;
    user_id: number;
    user_email: string;
    user_name: string;
    community_id: number;
    user_avatar_url: string | null;
    cover_image_url: string | null;
    cover_image: string | null;
    cardview_thumbnail_url: string | null;
    cardview_thumbnail: string | null;
    is_comments_closed: boolean;
    custom_html: string | null;
    likes_count: number;
    member_posts_count: number;
    member_comments_count: number;
    member_likes_count: number;
    topics: number[];
}
export interface ListBasicPostsResponse {
    page: number;
    per_page: number;
    has_next_page: boolean;
    count: number;
    page_count: number;
    records: BasicPostFromList[];
}
export interface ProfileFieldChoice {
    id: number;
    value: string;
}
export interface CommunityMemberProfileFieldChoice {
    id: number;
    profile_field_choice: ProfileFieldChoice;
}
export interface CommunityMemberProfileFieldDetails {
    id: number;
    text: string | null;
    textarea: string | null;
    created_at: string;
    updated_at: string;
    display_value: string[] | null;
    community_member_choices: CommunityMemberProfileFieldChoice[];
}
export interface ProfileFieldPage {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    created_at: string;
    updated_at: string;
}
export interface ProfileField {
    id: number;
    label: string;
    field_type: string;
    key: string;
    placeholder: string | null;
    description: string | null;
    required: boolean;
    platform_field: boolean;
    created_at: string;
    updated_at: string;
    community_member_profile_field: CommunityMemberProfileFieldDetails | null;
    number_options: any | null;
    choices: ProfileFieldChoice[];
    pages: ProfileFieldPage[];
}
export interface MemberTag {
    name: string;
    id: number;
}
export interface GamificationStats {
    community_member_id: number;
    total_points: number;
    current_level: number;
    current_level_name: string;
    points_to_next_level: number;
    level_progress: number;
}
export interface CommunityMemberListItem {
    id: number;
    name: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    headline: string | null;
    created_at: string;
    updated_at: string;
    community_id: number;
    last_seen_at: string | null;
    profile_confirmed_at: string | null;
    profile_url: string;
    public_uid: string;
    avatar_url: string | null;
    user_id: number;
    active: boolean;
    sso_provider_user_id: string | null;
    accepted_invitation: string | null;
    profile_fields: ProfileField[];
    flattened_profile_fields: Record<string, string[] | null>;
    member_tags: MemberTag[];
    posts_count: number;
    comments_count: number;
    gamification_stats: GamificationStats;
}
export interface ListCommunityMembersResponse {
    page: number;
    per_page: number;
    has_next_page: boolean;
    count: number;
    page_count: number;
    records: CommunityMemberListItem[];
}
export interface CommunityMemberDetails {
    id: number;
    first_name: string | null;
    last_name: string | null;
    headline: string | null;
    created_at: string;
    updated_at: string;
    community_id: number;
    last_seen_at: string | null;
    profile_confirmed_at: string | null;
    profile_url: string;
    public_uid: string;
    profile_fields: ProfileField[];
    flattened_profile_fields: Record<string, string[] | null>;
    avatar_url: string | null;
    user_id: number;
    name: string;
    email: string;
    accepted_invitation: string | null;
    active: boolean;
    sso_provider_user_id: string | null;
    member_tags: MemberTag[];
    posts_count: number;
    comments_count: number;
    gamification_stats: GamificationStats;
}
interface PostBody {
    id: number;
    name: string;
    body: string;
    record_type: string;
    record_id: number;
    created_at: string;
    updated_at: string;
}
interface TipTapMark {
    type: string;
    attrs?: Record<string, unknown>;
}
interface TipTapContentItem {
    type: string;
    text?: string;
    marks?: TipTapMark[];
    attrs?: Record<string, unknown>;
    content?: TipTapContentItem[];
    circle_ios_fallback_text?: string;
}
interface TipTapBody {
    body: {
        type: string;
        content: TipTapContentItem[];
    };
    circle_ios_fallback_text?: string;
    attachments?: unknown[];
    inline_attachments?: unknown[];
    sgids_to_object_map?: Record<string, unknown>;
    format?: string;
    community_members?: unknown[];
    entities?: unknown[];
    group_mentions?: unknown[];
    polls?: unknown[];
}
export interface PostDetails {
    id: number;
    status: string;
    name: string;
    slug: string;
    comments_count: number;
    hide_meta_info: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
    is_comments_enabled: boolean;
    is_liking_enabled: boolean;
    flagged_for_approval_at: string | null;
    body: PostBody;
    tiptap_body: TipTapBody;
    url: string;
    space_name: string;
    space_slug: string;
    space_id: number;
    user_id: number;
    user_email: string;
    user_name: string;
    community_id: number;
    user_avatar_url: string | null;
    cover_image_url: string | null;
    cover_image: string | null;
    cardview_thumbnail_url: string | null;
    cardview_thumbnail: string | null;
    is_comments_closed: boolean;
    custom_html: string | null;
    likes_count: number;
    member_posts_count: number;
    member_comments_count: number;
    member_likes_count: number;
    topics: number[];
}
export {};
//# sourceMappingURL=types.d.ts.map