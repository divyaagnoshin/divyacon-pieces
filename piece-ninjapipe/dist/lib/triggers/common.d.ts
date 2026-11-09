import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { Polling } from '@agnocon/pieces-common';
import { ninjapipeAuth } from '../../';
export declare function buildPolling(path: string, timestampField: string): Polling<AppConnectionValueForAuthProperty<typeof ninjapipeAuth>, Record<string, never>>;
export declare function buildProjectTasksPolling(timestampField: 'created_at' | 'updated_at'): Polling<AppConnectionValueForAuthProperty<typeof ninjapipeAuth>, {
    projectId: string;
}>;
//# sourceMappingURL=common.d.ts.map