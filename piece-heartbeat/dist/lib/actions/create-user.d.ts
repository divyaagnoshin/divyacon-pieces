export declare const heartBeatCreateUser: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    role_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    group_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    profile_picture: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bio: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linkedin: import("@agnocon/pieces-framework").LongTextProperty<false>;
    twitter: import("@agnocon/pieces-framework").LongTextProperty<false>;
    instagram: import("@agnocon/pieces-framework").LongTextProperty<false>;
    create_introduction_thread: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-user.d.ts.map