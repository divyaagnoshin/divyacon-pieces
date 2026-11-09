import { ElevenResidency } from './lib/common';
export declare const elevenlabsAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<ElevenResidency, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<ElevenResidency, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
export declare const elevenlabs: import("@agnocon/pieces-framework").Piece<import("@agnocon/pieces-framework").CustomAuthProperty<{
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<ElevenResidency, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<ElevenResidency, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
//# sourceMappingURL=index.d.ts.map