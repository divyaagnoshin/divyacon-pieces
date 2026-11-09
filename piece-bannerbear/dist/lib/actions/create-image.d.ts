export declare const bannerbearCreateImageAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    template: import("@agnocon/pieces-framework").DropdownProperty<BannerbearTemplate, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    template_version: import("@agnocon/pieces-framework").NumberProperty<false>;
    modifications: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    transparent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    render_pdf: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    metadata: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
interface BannerbearTemplate {
    created_at: string;
    name: string;
    self: string;
    uid: string;
    preview_url: number;
    width: number;
    height: number;
    available_modifications: {
        name: string;
        image_url?: string;
        text?: string;
        chart_data: string;
        bar_code_data: number;
        rating: number;
    }[];
    tags: string[];
}
export {};
//# sourceMappingURL=create-image.d.ts.map