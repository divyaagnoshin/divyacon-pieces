export declare const zoomUpdateMeeting: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    meeting_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    topic: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    start_time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    auto_recording: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    audio: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    agenda: import("@agnocon/pieces-framework").LongTextProperty<false>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    host_video: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    participant_video: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    join_before_host: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    mute_upon_entry: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waiting_room: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-meeting.d.ts.map