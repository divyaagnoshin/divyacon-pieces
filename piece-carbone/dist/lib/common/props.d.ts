declare function templateDropdown({ displayName, description, showIdInLabel, }: {
    displayName: string;
    description: string;
    showIdInLabel?: boolean;
}): import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const carboneProps: {
    templateDropdown: typeof templateDropdown;
};
export {};
//# sourceMappingURL=props.d.ts.map