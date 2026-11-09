export declare const enrollAUserIntoAUserGroup: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    user_identifier: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    user_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    user_group_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    user_group_enrollment_expiration_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=enroll-a-user-into-a-user-group.d.ts.map