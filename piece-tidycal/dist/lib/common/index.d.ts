import { HttpMessageBody, HttpMethod, HttpResponse } from '@agnocon/pieces-common';
import { tidyCalAuth } from '../auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare function calltidycalapi<T extends HttpMessageBody>(method: HttpMethod, apiUrl: string, accessToken: AppConnectionValueForAuthProperty<typeof tidyCalAuth>, body: any | undefined): Promise<HttpResponse<T>>;
//# sourceMappingURL=index.d.ts.map