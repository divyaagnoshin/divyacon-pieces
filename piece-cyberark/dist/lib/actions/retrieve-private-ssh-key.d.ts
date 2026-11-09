export declare const retrievePrivateSSHKey: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    reason: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ticketingSystemName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ticketId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    version: import("@agnocon/pieces-framework").NumberProperty<false>;
    actionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    isUse: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    machine: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=retrieve-private-ssh-key.d.ts.map