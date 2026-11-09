/**
 * Save a file to the user file system inside a specific folder.
 *
 * Two-step on the wire — OAuth tokens cannot use the multipart/chunkId paths
 * on `files/Upload` (the panel and mobile app do, but `Upload.php::execute`
 * gates `FILES["file"]` / `POST["analysis"]` / `POST["chunkId"]` to
 * `isAppRequest() || isPanelRequest()`). The integration-supported path is:
 *
 *   1. Upload the bytes to the API files service (files.simplyprint.io)
 *      via the existing chunked / streamed protocol → returns hex `fileId`.
 *   2. POST `files/Upload` with `{fileId}` in the body and `folder` in the
 *      query string → backend materializes a UserFile in that folder.
 *
 * Reusing the chunked-upload state machine means files of any size go
 * through (95 MiB chunks single-shot under the cap, streamed above).
 */
export declare const uploadToFolderAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    fileUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    folderId: import("@agnocon/pieces-framework").NumberProperty<false>;
    customFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=upload-to-folder.d.ts.map