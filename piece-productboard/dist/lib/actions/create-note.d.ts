/**
 * Action to create a new note/feedback in Productboard.
 */
export declare const createNote: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    user_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    company_domain: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    display_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    source_origin: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    source_record_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-note.d.ts.map