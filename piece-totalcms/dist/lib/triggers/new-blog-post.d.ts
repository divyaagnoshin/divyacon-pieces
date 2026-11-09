import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newBlogPost: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    slug: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    slug: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    slug: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    slug: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=new-blog-post.d.ts.map