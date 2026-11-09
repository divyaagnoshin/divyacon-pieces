"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webling = void 0;
const pieces_framework_1 = require("@agnocon/pieces-framework");
const calendar_event_1 = require("./lib/triggers/calendar-event");
const on_changed_data_1 = require("./lib/triggers/on-changed-data");
const pieces_framework_2 = require("@agnocon/pieces-framework");
const get_events_by_id_1 = require("./lib/actions/get-events-by-id");
const auth_1 = require("./lib/auth");
exports.webling = (0, pieces_framework_1.createPiece)({
    displayName: 'Webling',
    auth: auth_1.weblingAuth,
    minimumSupportedRelease: '0.30.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/webling.png',
    categories: [pieces_framework_2.PieceCategory.PRODUCTIVITY],
    authors: ['felifluid'],
    actions: [get_events_by_id_1.eventsById],
    triggers: [calendar_event_1.onEventChanged, on_changed_data_1.onChangedData],
});
//# sourceMappingURL=index.js.map