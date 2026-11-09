export declare const runActor: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    actorSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    actorid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    input: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    build: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    memory: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForFinish: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=run-actor.d.ts.map