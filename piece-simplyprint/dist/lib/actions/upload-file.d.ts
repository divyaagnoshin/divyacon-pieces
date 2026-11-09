/**
 * Upload a file (G-code, STL, 3MF) into SimplyPrint via the API files
 * service (files.simplyprint.io). Returns a string file id (hex bucket
 * hash) that can be used as `fileId` on Add File to Queue or `file_id` on
 * Start Print.
 *
 * Two input modes, pick one:
 *   - File: AP's Property.File materializes the source into a Buffer
 *     before the action runs (non-streaming; full file in RAM during
 *     upload). Fine for builder-picked files and step-to-step handoffs.
 *   - File URL: the piece fetches and streams the bytes directly to
 *     SimplyPrint with ~95 MiB peak memory regardless of source size.
 *     Use for multi-hundred-MB / GB slicer files from cloud storage.
 *
 * Files over 95 MiB are sent in chunks via the `totalSize` +
 * `continueToken` protocol, on either path.
 */
export declare const uploadFileAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    fileUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=upload-file.d.ts.map