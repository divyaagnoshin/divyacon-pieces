/**
 * Wraps `files/GetFiles` — the main folder-and-file browser endpoint.
 * Returns the whole response body (files, folders, breadcrumbs, space stats)
 * so callers can use whichever pieces they need.
 */
export declare const listFilesAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    folderId: import("@agnocon/pieces-framework").NumberProperty<false>;
    search: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    globalSearch: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=list-files.d.ts.map