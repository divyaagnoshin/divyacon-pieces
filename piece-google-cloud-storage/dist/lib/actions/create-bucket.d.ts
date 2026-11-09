export declare const createBucket: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    projectId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    location: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    storageClass: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    versioning: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    uniformBucketLevelAccess: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    labels: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-bucket.d.ts.map