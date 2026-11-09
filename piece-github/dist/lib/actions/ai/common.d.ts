/**
 * Shared flat props + error mapping for the agent (audience:'ai') GitHub atomics.
 * Agents cannot drive Property.Dropdown / DynamicProperties, so every atomic takes
 * plain owner/repo ShortText (resolve via List My Repositories / Search Repositories /
 * Get Authenticated User) instead of githubCommon.repositoryDropdown.
 */
export declare const ownerProp: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const repoProp: import("@agnocon/pieces-framework").ShortTextProperty<true>;
/**
 * Maps a github httpClient error to a friendly message. Returns the thrown Error.
 * `resource` is a human label for the 404 (e.g. "Repository owner/repo").
 */
export declare function githubError(error: any, resource: string): Error;
//# sourceMappingURL=common.d.ts.map