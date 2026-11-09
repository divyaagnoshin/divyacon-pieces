import { HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
declare function callBeebole<T extends HttpMessageBody>({ token, body, }: {
    token: string;
    body: Record<string, unknown>;
}): Promise<HttpResponse<T>>;
export declare const beeboleClient: {
    call: typeof callBeebole;
};
export {};
//# sourceMappingURL=client.d.ts.map