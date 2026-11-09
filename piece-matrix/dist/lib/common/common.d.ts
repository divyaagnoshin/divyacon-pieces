import { HttpResponse } from '@agnocon/pieces-common';
export declare function getRoomId(baseUrl: string, roomAlias: string, accessToken: string): Promise<HttpResponse>;
export declare function sendMessage(baseUrl: string, roomId: string, accessToken: string, message: string): Promise<HttpResponse>;
//# sourceMappingURL=common.d.ts.map