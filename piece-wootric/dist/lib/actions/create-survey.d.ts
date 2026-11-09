export declare const sendSurvey: (surveyRequestPayload: object) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare const createWootricSurvey: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    emails: import("@agnocon/pieces-framework").ArrayProperty<true>;
    surveyImmediately: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=create-survey.d.ts.map