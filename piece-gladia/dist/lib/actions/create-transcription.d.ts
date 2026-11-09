export declare const createTranscription: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    audio_url: import("@agnocon/pieces-framework").LongTextProperty<true>;
    languages: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    code_switching: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    subtitles: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    subtitles_format: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    diarization: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    translation: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    summarization: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    summarization_type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    sentiment_analysis: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sentences: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    custom_metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-transcription.d.ts.map