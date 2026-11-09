import { type HttpResponse, type HttpRequest } from '@agnocon/pieces-common';
export declare const callSevenApi: <T>(httpRequest: Omit<HttpRequest, "url">, path: string, apiKey: string) => Promise<HttpResponse<T>>;
//# sourceMappingURL=index.d.ts.map