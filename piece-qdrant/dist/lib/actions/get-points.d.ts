export declare const getPoints: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    getPointsBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    infosToGetPoint: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        serverAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    collectionName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=get-points.d.ts.map