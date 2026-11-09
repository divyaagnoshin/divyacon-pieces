"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubspotFieldType = exports.FilterOperatorEnum = void 0;
var FilterOperatorEnum;
(function (FilterOperatorEnum) {
    FilterOperatorEnum["Eq"] = "EQ";
    FilterOperatorEnum["Neq"] = "NEQ";
    FilterOperatorEnum["Lt"] = "LT";
    FilterOperatorEnum["Lte"] = "LTE";
    FilterOperatorEnum["Gt"] = "GT";
    FilterOperatorEnum["Gte"] = "GTE";
    FilterOperatorEnum["Between"] = "BETWEEN";
    FilterOperatorEnum["In"] = "IN";
    FilterOperatorEnum["NotIn"] = "NOT_IN";
    FilterOperatorEnum["HasProperty"] = "HAS_PROPERTY";
    FilterOperatorEnum["NotHasProperty"] = "NOT_HAS_PROPERTY";
    FilterOperatorEnum["ContainsToken"] = "CONTAINS_TOKEN";
    FilterOperatorEnum["NotContainsToken"] = "NOT_CONTAINS_TOKEN";
})(FilterOperatorEnum || (exports.FilterOperatorEnum = FilterOperatorEnum = {}));
var HubspotFieldType;
(function (HubspotFieldType) {
    HubspotFieldType["BooleanCheckBox"] = "booleancheckbox";
    HubspotFieldType["Date"] = "date";
    HubspotFieldType["File"] = "file";
    HubspotFieldType["Number"] = "number";
    HubspotFieldType["CalculationEquation"] = "calculation_equation";
    HubspotFieldType["PhoneNumber"] = "phonenumber";
    HubspotFieldType["Text"] = "text";
    HubspotFieldType["TextArea"] = "textarea";
    HubspotFieldType["Html"] = "html";
    HubspotFieldType["CheckBox"] = "checkbox";
    HubspotFieldType["Select"] = "select";
    HubspotFieldType["Radio"] = "radio";
})(HubspotFieldType || (exports.HubspotFieldType = HubspotFieldType = {}));
//# sourceMappingURL=types.js.map