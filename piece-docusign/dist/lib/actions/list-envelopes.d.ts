export declare const listEnvelopes: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    impersonatedUserId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    scopes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fromDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    toDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    searchText: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    include: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=list-envelopes.d.ts.map