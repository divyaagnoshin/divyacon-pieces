import { HttpMethod } from '@agnocon/pieces-common';
import { CursorAuth } from './auth';
export declare function makeCursorRequest<T = any>(auth: CursorAuth, endpoint: string, method?: HttpMethod, body?: unknown, queryParams?: Record<string, any>): Promise<T>;
//# sourceMappingURL=client.d.ts.map