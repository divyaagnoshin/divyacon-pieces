export declare const gristUploadAttachmentsToDocumnetAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    document_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    attachment: import("@agnocon/pieces-framework").FileProperty<true, false>;
    attachment_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=upload-attachments-to-document.action.d.ts.map