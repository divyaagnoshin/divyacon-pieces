import dayjs from 'dayjs';
export declare const apDayjs: typeof dayjs;
export interface dateInformation {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    unix_time: number;
}
export declare enum timeFormat {
    format00 = "DDD MMM DD YYYY HH:mm:ss",
    format01 = "DDD MMM DD HH:mm:ss YYYY",
    format02 = "MMMM DD YYYY HH:mm:ss",
    format03 = "MMMM DD YYYY",
    format04 = "MMM DD YYYY",
    format05 = "YYYY-MM-DDTHH:mm:ss",
    format06 = "YYYY-MM-DD HH:mm:ss",
    format07 = "YYYY-MM-DD",
    format08 = "MM-DD-YYYY",
    format09 = "MM/DD/YYYY",
    format10 = "MM/DD/YY",
    format11 = "DD-MM-YYYY",
    format12 = "DD/MM/YYYY",
    format13 = "DD/MM/YY",
    format14 = "X"
}
export declare enum timeFormatLabel {
    format00 = "DDD MMM DD YYYY HH:mm:ss (Sun Sep 17 2023 11:23:58)",
    format01 = "DDD MMM DD HH:mm:ss YYYY (Sun Sep 17 11:23:58 2023)",
    format02 = "MMMM DD YYYY HH:mm:ss (September 17 2023 11:23:58)",
    format03 = "MMMM DD YYYY (September 17 2023)",
    format04 = "MMM DD YYYY (Sep 17 2023)",
    format05 = "YYYY-MM-DDTHH:mm:ss (2023-09-17T11:23:58) ",
    format06 = "YYYY-MM-DD HH:mm:ss (2023-09-17 11:23:58)",
    format07 = "YYYY-MM-DD (2023-09-17)",
    format08 = "MM-DD-YYYY (09-17-2023)",
    format09 = "MM/DD/YYYY (09/17/2023)",
    format10 = "MM/DD/YY (09/17/23)",
    format11 = "DD-MM-YYYY (17-09-2023)",
    format12 = "DD/MM/YYYY (17/09/2023)",
    format13 = "DD/MM/YY (17/09/23)",
    format14 = "X (1694949838)"
}
export declare enum timeParts {
    year = "year",
    month = "month",
    day = "day",
    hour = "hour",
    minute = "minute",
    second = "second",
    unix_time = "unix_time",
    dayOfWeek = "dayOfWeek",
    monthName = "monthName"
}
export declare const getCorrectedFormat: (format: string) => string;
export declare function parseDate(date: string, format: string): dayjs.Dayjs;
export declare const timeFormatDescription = "Here's what each part of the format (e.g., YYYY) represents:\n\nYYYY : Year (4 digits) - Example: 2023\n\nYY : Year (2 digits) - Example: 23\n\nMMMM : Month (full name) - Example: September\n\nMMM : Month (short name) - Example: Sep\n\nMM : Month (2 digits) - Example: 09\n\nDDDD : Day (full name) - Example: Sunday\n\nDDD : Day (short name) - Example: Sun\n\nDD : Day (2 digits) - Example: 17\n\nHH : Hour (2 digits) - Example: 11\n\nmm : Minute (2 digits) - Example: 23\n\nss : Second (2 digits) - Example: 58\n\nX : Time in Unix format - Example: 1694949838";
export declare const optionalTimeFormats: {
    label: timeFormatLabel;
    value: timeFormat;
}[];
export declare const timeZoneOptions: {
    label: string;
    value: string;
}[];
//# sourceMappingURL=index.d.ts.map