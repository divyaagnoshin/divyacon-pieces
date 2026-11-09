/**
 * `tags/Assign` is a multi-subject endpoint — it routes via a numeric `type`
 * field (TagSubject enum: 1=printer, 2=printer group, 3=file, 4=queue item)
 * and applies a TagData payload via TagAssigningController. We expose just
 * the custom-tag-id case here since that's what most automation flows want;
 * nozzle/bedType/material tags are auto-set from gcode and have their own
 * dedicated props on Add to Queue / Upload & Queue.
 */
export declare const assignTagAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    subjectType: import("@agnocon/pieces-framework").StaticDropdownProperty<1 | 2 | 3 | 4, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<1 | 2 | 3 | 4, true>;
    subjectIds: import("@agnocon/pieces-framework").ArrayProperty<true>;
    tagIds: import("@agnocon/pieces-framework").ArrayProperty<true>;
    override: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=assign-tag.d.ts.map