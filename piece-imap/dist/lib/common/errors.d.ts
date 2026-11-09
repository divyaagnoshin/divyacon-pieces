export interface ImapClientError extends Error {
    code?: string;
    responseText?: string;
}
export declare class ImapError extends Error {
    constructor(message: string);
}
export declare class ImapAuthenticationError extends ImapError {
    constructor();
}
export declare class ImapConnectionLostError extends ImapError {
    constructor();
}
export declare class ImapConnectionRefusedError extends ImapError {
    constructor();
}
export declare class ImapConnectionTimeoutError extends ImapError {
    constructor();
}
export declare class ImapCertificateError extends ImapError {
    constructor();
}
export declare class ImapEmailNotFoundError extends ImapError {
    constructor();
}
export declare class ImapHostNotFoundError extends ImapError {
    constructor();
}
export declare class ImapMailboxNotFoundError extends ImapError {
    constructor();
}
export declare class ImapSslPacketLengthTooLongError extends ImapError {
    constructor();
}
//# sourceMappingURL=errors.d.ts.map