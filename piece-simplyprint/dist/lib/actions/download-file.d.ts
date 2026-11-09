/**
 * Download a file (user file, queue item, print job file, or temp upload)
 * and return it as an Activepieces file reference plus metadata. Subsequent
 * steps consume the reference via Property.File.
 *
 * Uses native fetch (not the AP/axios httpClient) so the binary stream isn't
 * mis-handled — same reasoning as `common/files.ts::buildSendPart`.
 */
export declare const downloadFileAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    source: import("@agnocon/pieces-framework").StaticDropdownProperty<"userFile" | "queueItem" | "printJob", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"userFile" | "queueItem" | "printJob", true>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=download-file.d.ts.map