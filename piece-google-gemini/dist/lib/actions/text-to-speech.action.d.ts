export declare const textToSpeechAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    voice: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
export declare function pcmToWavBuffer(pcmBuffer: Buffer, channels?: number, rate?: number, sampleWidth?: number): Promise<Buffer>;
//# sourceMappingURL=text-to-speech.action.d.ts.map