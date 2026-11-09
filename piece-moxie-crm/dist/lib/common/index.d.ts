import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { moxieCRMAuth } from '../auth';
import { MoxieCRMClient } from './client';
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof moxieCRMAuth>): Promise<MoxieCRMClient>;
export declare function reformatDate(s?: string): string | undefined;
//# sourceMappingURL=index.d.ts.map