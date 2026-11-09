import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { Fathom } from 'fathom-typescript';
export declare const fathomAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[];
export declare function getFathomClient(auth: FathomAuthValue): Fathom;
export type FathomAuthValue = AppConnectionValueForAuthProperty<typeof fathomAuth>;
//# sourceMappingURL=auth.d.ts.map