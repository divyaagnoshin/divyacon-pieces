"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadStatusOptions = exports.baseUrl = void 0;
exports.formatError = formatError;
exports.baseUrl = 'https://pollybot.app/api/v1';
exports.leadStatusOptions = {
    new: 'New',
    contacted: 'Contacted',
    qualified: 'Qualified',
    converted: 'Converted',
    lost: 'Lost',
    follow_up: 'Follow Up',
};
// Helper to format error messages exactly like your Zapier handleApiError
function formatError(e) {
    var _a, _b;
    const error = e;
    const status = (_a = error.response) === null || _a === void 0 ? void 0 : _a.status;
    const errorData = ((_b = error.response) === null || _b === void 0 ? void 0 : _b.body) || {};
    const message = errorData.error || error.message || 'Unknown Error';
    const details = errorData.details ? JSON.stringify(errorData.details) : '';
    return `Error (${status}): ${message}. ${details}`;
}
// // Webhook Subscription Helpers
// export const pollybotCommon = {
//   // Updated to return both webhookId and secret
//   subscribeWebhook: async (
//     chatbotId: string,
//     apiKey: string,
//     webhookUrl: string
//   ): Promise<{ webhookId: string; secret: string }> => {
//     const response = await httpClient.sendRequest({
//       method: HttpMethod.POST,
//       url: `${baseUrl}/chatbots/${chatbotId}/webhooks`,
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: {
//         name: `Activepieces - New Lead (${new Date().toISOString()})`,
//         url: webhookUrl,
//         eventTypes: ['LEAD_CREATED'],
//         maxRetries: 3,
//         retryDelay: 1000,
//       },
//     }); // PollyBot returns { webhook: { id: "...", secret: "..." }, ... } or just { id: "...", secret: "..." }
//     const body = response.body;
//     const webhook = body.webhook || body;
//     return {
//       webhookId: webhook.id,
//       secret: webhook.secret, // Extract and return the secret
//     };
//   },
//   unsubscribeWebhook: async (
//     chatbotId: string,
//     apiKey: string,
//     webhookId: string
//   ): Promise<void> => {
//     await httpClient.sendRequest({
//       method: HttpMethod.DELETE,
//       url: `${baseUrl}/chatbots/${chatbotId}/webhooks/${webhookId}`,
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });
//   },
// };
//# sourceMappingURL=common.js.map