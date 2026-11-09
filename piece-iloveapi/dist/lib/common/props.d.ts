import { UploadInput } from './client';
export declare const sharedProps: {
    output_filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    packaged_filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
type ApFile = {
    base64: string;
    filename: string;
};
export declare function fileToUploadInput(file: ApFile): UploadInput;
export {};
//# sourceMappingURL=props.d.ts.map