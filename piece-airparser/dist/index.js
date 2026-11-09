"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.airparser = void 0;
const pieces_framework_1 = require("@agnocon/pieces-framework");
const pieces_framework_2 = require("@agnocon/pieces-framework");
const extract_data_from_document_1 = require("./lib/actions/extract-data-from-document");
const upload_document_for_parsing_1 = require("./lib/actions/upload-document-for-parsing");
const document_parsed_1 = require("./lib/triggers/document-parsed");
const auth_1 = require("./lib/auth");
exports.airparser = (0, pieces_framework_1.createPiece)({
    displayName: 'Airparser',
    description: 'Extract structured data from emails, PDFs, or documents with Airparser.',
    auth: auth_1.airparserAuth,
    logoUrl: 'https://cdn.activepieces.com/pieces/airparser.png',
    authors: ['krushnarout', 'kishanprmr'],
    categories: [pieces_framework_2.PieceCategory.PRODUCTIVITY],
    actions: [extract_data_from_document_1.extractDataFromDocumentAction, upload_document_for_parsing_1.uploadDocumentAction],
    triggers: [document_parsed_1.documentParsedTrigger],
});
//# sourceMappingURL=index.js.map