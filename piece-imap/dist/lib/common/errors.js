"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImapSslPacketLengthTooLongError = exports.ImapMailboxNotFoundError = exports.ImapHostNotFoundError = exports.ImapEmailNotFoundError = exports.ImapCertificateError = exports.ImapConnectionTimeoutError = exports.ImapConnectionRefusedError = exports.ImapConnectionLostError = exports.ImapAuthenticationError = exports.ImapError = void 0;
class ImapError extends Error {
    constructor(message) {
        super(`IMAP error: ${message}`);
        this.name = 'ImapGenericError';
    }
}
exports.ImapError = ImapError;
class ImapAuthenticationError extends ImapError {
    constructor() {
        super('Authentication failed. Check username and password.');
        this.name = 'ImapAuthenticationError';
    }
}
exports.ImapAuthenticationError = ImapAuthenticationError;
class ImapConnectionLostError extends ImapError {
    constructor() {
        super('IMAP connection lost while fetching emails.');
        this.name = 'ImapConnectionLostError';
    }
}
exports.ImapConnectionLostError = ImapConnectionLostError;
class ImapConnectionRefusedError extends ImapError {
    constructor() {
        super('Connection refused. Check host and port settings.');
        this.name = 'ImapConnectionRefusedError';
    }
}
exports.ImapConnectionRefusedError = ImapConnectionRefusedError;
class ImapConnectionTimeoutError extends ImapError {
    constructor() {
        super('Connection timed out. Check network connectivity and server availability.');
        this.name = 'ImapConnectionTimeoutError';
    }
}
exports.ImapConnectionTimeoutError = ImapConnectionTimeoutError;
class ImapCertificateError extends ImapError {
    constructor() {
        super('TLS certificate validation failed. Consider disabling certificate validation for testing.');
        this.name = 'ImapCertificateError';
    }
}
exports.ImapCertificateError = ImapCertificateError;
class ImapEmailNotFoundError extends ImapError {
    constructor() {
        super('Email not found in the specified mailbox.');
        this.name = 'ImapEmailNotFoundError';
    }
}
exports.ImapEmailNotFoundError = ImapEmailNotFoundError;
class ImapHostNotFoundError extends ImapError {
    constructor() {
        super('Host not found. Please verify the IMAP server address.');
        this.name = 'ImapHostNotFoundError';
    }
}
exports.ImapHostNotFoundError = ImapHostNotFoundError;
class ImapMailboxNotFoundError extends ImapError {
    constructor() {
        super('The specified mailbox/folder does not exist on the server.');
        this.name = 'ImapMailboxNotFoundError';
    }
}
exports.ImapMailboxNotFoundError = ImapMailboxNotFoundError;
class ImapSslPacketLengthTooLongError extends ImapError {
    constructor() {
        super('SSL packet length too long. The specified server port is probably incorrect.');
        this.name = 'ImapSslPacketLengthTooLongError';
    }
}
exports.ImapSslPacketLengthTooLongError = ImapSslPacketLengthTooLongError;
//# sourceMappingURL=errors.js.map