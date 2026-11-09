"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HedyApiError = void 0;
const DEFAULT_ERROR_MESSAGE = 'An unknown error occurred while communicating with Hedy.';
function deriveCode(initialCode, statusCode) {
    if (initialCode) {
        return initialCode;
    }
    if (statusCode === 429) {
        return 'rate_limit_exceeded';
    }
    return 'unknown_error';
}
const FRIENDLY_MESSAGES = {
    webhook_limit_exceeded: 'Maximum webhook limit (50) reached. Please delete unused webhooks in your Hedy dashboard.',
    authentication_failed: 'Invalid API key. Please check your Hedy dashboard for the correct API key.',
    invalid_event: 'Invalid event type. Valid events: session.created, session.ended, session.exported, highlight.created, todo.exported.',
    invalid_webhook_url: 'Webhook URL must be publicly accessible. For local testing, use a tunneling service like ngrok.',
    invalid_parameter: 'Invalid request parameter. Please review your configuration and try again.',
    context_limit_exceeded: 'Context limit reached for your plan. Please upgrade or delete an existing context.',
    resource_not_found: 'The requested resource was not found. Please check the ID and try again.',
    rate_limit_exceeded: 'Rate limit reached. Please wait a moment before trying again.',
    unknown_error: DEFAULT_ERROR_MESSAGE,
};
class HedyApiError extends Error {
    constructor(code, message, details) {
        super(message || DEFAULT_ERROR_MESSAGE);
        this.code = code;
        this.details = details;
        this.name = 'HedyApiError';
    }
    static fromPayload(payload, fallback, statusCode) {
        var _a, _b, _c, _d, _e;
        if (payload && payload.error) {
            const { code, message } = payload.error;
            const resolvedCode = deriveCode(code, statusCode);
            return new HedyApiError(resolvedCode, (_b = (_a = FRIENDLY_MESSAGES[resolvedCode]) !== null && _a !== void 0 ? _a : message) !== null && _b !== void 0 ? _b : DEFAULT_ERROR_MESSAGE, payload);
        }
        if (fallback instanceof HedyApiError) {
            return fallback;
        }
        if (fallback instanceof Error) {
            const derivedCode = deriveCode(undefined, statusCode);
            return new HedyApiError(derivedCode, (_d = (_c = FRIENDLY_MESSAGES[derivedCode]) !== null && _c !== void 0 ? _c : fallback.message) !== null && _d !== void 0 ? _d : DEFAULT_ERROR_MESSAGE, fallback);
        }
        const finalCode = deriveCode(undefined, statusCode);
        return new HedyApiError(finalCode, (_e = FRIENDLY_MESSAGES[finalCode]) !== null && _e !== void 0 ? _e : DEFAULT_ERROR_MESSAGE, fallback);
    }
}
exports.HedyApiError = HedyApiError;
//# sourceMappingURL=errors.js.map