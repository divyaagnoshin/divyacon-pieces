import { HttpMethod, HttpResponse, HttpMessageBody } from '@agnocon/pieces-common';
import { zendeskSellAuth } from './auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const ZENDESK_SELL_API_URL = "https://api.getbase.com";
export declare function callZendeskApi<T>(method: HttpMethod, endpoint: string, auth: AppConnectionValueForAuthProperty<typeof zendeskSellAuth>, body?: HttpMessageBody, query?: Record<string, string>): Promise<HttpResponse<T>>;
//# sourceMappingURL=client.d.ts.map